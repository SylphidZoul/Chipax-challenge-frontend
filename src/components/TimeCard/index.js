import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const TimeCard = ({ time, action }) => {
  return (
    <div className={styles.TimeCard}>
      <p className={styles.Text}>
        The backend took&nbsp;
        <span className={styles.Time}>
          {time}&nbsp;
        </span>
        in fetching data from the Rick and Morty API and {action}.
      </p>
    </div>
  )
}

TimeCard.propTypes = {
  time: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
}
