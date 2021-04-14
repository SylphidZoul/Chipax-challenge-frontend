import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const ScreenToggleButton = ({ inactiveScreenName, onClick }) => {
  return (
    <div className={styles.ButtonWrapper}>
      <button
        className={styles.ToggleButton}
        type='button'
        onClick={onClick}
      >
        {inactiveScreenName}
      </button>
    </div>
  )
}

ScreenToggleButton.propTypes = {
  inactiveScreenName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
