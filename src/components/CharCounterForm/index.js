import React from 'react'
import PropTypes from 'prop-types'
import { useHttp } from '../../hooks/useHttp'
import { CardButton } from '../CardButton'
import { CharCounterInput } from '../CharCounterInput'
import { ErrorToast } from '../ErrorToast'
import { SpinnerToast } from '../SpinnerToast'
import styles from './styles.module.css'

export const CharCounterForm = ({ onSubmit }) => {
  const { isFetching, error, httpGet } = useHttp()

  const handleQuery = (inputs) => {
    const querys = {
      character: `character_letter=${inputs[0].value}`,
      episode: `episode_letter=${inputs[1].value}`,
      location: `location_letter=${inputs[2].value}`
    }
    return `charcounter?${querys.character}&${querys.episode}&${querys.location}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const route = handleQuery(e.target)
    try {
      const { data } = await httpGet(route)
      onSubmit(data)
    } catch {}
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <div className={styles.InputsContainer}>
          <CharCounterInput
            name='characterLetter'
            label='Character'
            initialValue='c'
          />
          <CharCounterInput
            name='episodeLetter'
            label='Episode'
            initialValue='e'
          />
          <CharCounterInput
            name='locationLetter'
            label='Location'
            initialValue='l'
          />
        </div>
        <CardButton type='submit'>
          Let's Count!
        </CardButton>
      </form>
      <SpinnerToast isFetching={isFetching} />
      <ErrorToast errorMessage={error} />
    </>
  )
}

CharCounterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
