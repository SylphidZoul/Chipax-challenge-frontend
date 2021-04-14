import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const EpisodeLocationCard = ({ episode }) => {
  return (
    <div className={styles.EpisodeCard}>
      <p className={styles.Text}>
        {episode.episode}: "{episode.name}" featured&nbsp;
        <span className={styles.KeyWord}>{episode.charactersQuantity}&nbsp;</span>
        characters with&nbsp;
        <span className={styles.KeyWord}>{episode.locationsQuantity}&nbsp;</span>
        different origin locations:&nbsp;
        {
          episode.locations.map((location, i) => (
            <React.Fragment key={location}>
              <span
                className={styles.KeyWord}
              >
                {location}
              </span>
              {(i + 1) === episode.locations.length ? '.' : ', '}
            </React.Fragment>
          ))
        }
      </p>
    </div>
  )
}

EpisodeLocationCard.propTypes = {
  episode: PropTypes.shape({
    name: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired,
    charactersQuantity: PropTypes.number.isRequired,
    locationsQuantity: PropTypes.number.isRequired,
    locations: PropTypes.arrayOf(PropTypes.string).isRequired
  })
}
