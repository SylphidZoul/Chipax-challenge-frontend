import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const MainCard = ({ title, description, children }) => {
  return (
    <div className={styles.MainCard}>
      <h1 className={styles.CardTitle}>
        {title}
      </h1>
      <p className={styles.Description}>
        {description}
      </p>
      {children}
    </div>
  )
}

MainCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
