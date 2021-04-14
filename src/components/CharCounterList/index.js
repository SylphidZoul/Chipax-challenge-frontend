import React from 'react'
import PropTypes from 'prop-types'
import { CharCounterCard } from '../CharCounterCard'
import styles from './styles.module.css'

export const CharCounterList = ({ countList }) => {
  return (
    <div className={styles.CardsList}>
      {countList.map((count, i) => (
        <CharCounterCard
          key={count.count + i}
          count={count}
        />
      ))}
    </div>
  )
}

CharCounterList.propTypes = {
  countList: PropTypes.arrayOf(PropTypes.shape({
    endpoint: PropTypes.string.isRequired,
    characterToCount: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }))
}
