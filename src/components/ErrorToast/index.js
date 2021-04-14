import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

export const ErrorToast = ({ errorMessage }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!show && !errorMessage) return
    setShow(prevState => !prevState)
  }, [errorMessage])

  return (
    show &&
      createPortal(
        <div className={styles.Toast}>
          <h3 className={styles.Message}>
            {errorMessage}
          </h3>
          <button className={styles.CloseButton} onClick={() => setShow(false)}>x</button>
        </div>,
        document.getElementById('toast')
      )
  )
}

ErrorToast.propTypes = {
  errorMessage: PropTypes.string.isRequired
}
