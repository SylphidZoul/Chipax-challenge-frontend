import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const CardButton = ({ type, onClick, children }) => {
  return (
    <button
      className={styles.CardButton}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

CardButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
