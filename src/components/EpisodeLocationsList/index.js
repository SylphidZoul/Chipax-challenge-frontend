import React from 'react'
import PropTypes from 'prop-types'
import { EpisodeLocationCard } from '../EpisodeLocationCard'
import styles from './styles.module.css'

export const EpisodeLocationsList = ({ episodesList }) => {
  return (
    <div className={styles.listContainer}>
      {
      episodesList.map(episode => (
        <EpisodeLocationCard
          key={episode.episode}
          episode={episode}
        />
      ))
      }
    </div>
  )
}

EpisodeLocationsList.propTypes = {
  episodesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired,
    charactersQuantity: PropTypes.number.isRequired,
    locationsQuantity: PropTypes.number.isRequired,
    locations: PropTypes.arrayOf(PropTypes.string).isRequired
  }))
}
