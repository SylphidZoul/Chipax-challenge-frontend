import { useState, useEffect } from 'react'
import axios from 'axios'

const server = 'https://backend-chipax.vercel.app/'

export const useHttp = (initialFetchingState = false) => {
  const [isFetching, setIsFetching] = useState(initialFetchingState)
  const [error, setError] = useState('')

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(''), 4000)
      return () => clearTimeout(timeout)
    }
  }, [error])

  const handleError = (err) => {
    setIsFetching(false)
    if (err.response) return setError(err.response.data.data.message)
    setError('There was an error in the network.')
  }

  const requestWithTryCatch = async (request, route, body) => {
    const url = `${server}${route}`
    const requestArgs = [url, body]

    setIsFetching(true)
    try {
      const response = await request(...requestArgs)
      setIsFetching(false)
      return response.data
    } catch (err) {
      handleError(err)
    }
  }

  const httpGet = (route) => {
    return requestWithTryCatch(axios.get, route, null)
  }

  const httpPost = (route, body) => {
    return requestWithTryCatch(axios.post, route, body)
  }

  const httpUpdate = (route, body, put = false) => {
    const verb = put ? 'put' : 'patch'
    return requestWithTryCatch(axios[verb], route, body)
  }

  const httpDelete = (route) => {
    return requestWithTryCatch(axios.delete, route, null)
  }

  return { isFetching, error, httpGet, httpPost, httpUpdate, httpDelete }
}
