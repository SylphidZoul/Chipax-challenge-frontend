import React from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

export const SpinnerToast = ({ isFetching }) => {
  return (
    isFetching &&
      createPortal(
        <div className={styles.SpinnerWrapper}>
          <div className={styles.Spinner} />
        </div>,
        document.getElementById('toast')
      )
  )
}

SpinnerToast.propTypes = {
  isFetching: PropTypes.bool.isRequired
}
