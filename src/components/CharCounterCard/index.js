import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const CharCounterCard = ({ count }) => {
  return (
    <div
      className={styles.CountCard}
    >
      <p className={styles.Text}>
        In all&nbsp;
        <span className={styles.KeyWord}>
          {count.endpoint}s&nbsp;
        </span>'
        names there are&nbsp;
        <span className={styles.KeyWord}>
          {count.count} {count.characterToCount}&nbsp;
        </span>
        characters!
      </p>
    </div>
  )
}

CharCounterCard.propTypes = {
  count: PropTypes.shape({
    endpoint: PropTypes.string.isRequired,
    characterToCount: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })
}
