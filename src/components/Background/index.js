import React from 'react'
import RickImage from '../../assets/rick.png'
import MortyImage from '../../assets/morty.png'
import Icon from '../../assets/icon.svg'
import styles from './styles.module.css'

export const Background = () => {
  return (
    <div>
      <div className={`${styles.ImageWrapper} ${styles.Rick}`}>
        <img
          src={RickImage}
          alt='Rick'
          className={styles.Image}
        />
      </div>
      <div className={`${styles.ImageWrapper} ${styles.Icon}`}>
        <img
          src={Icon}
          alt='🧪'
          className={styles.Image}
        />
      </div>
      <div className={`${styles.ImageWrapper} ${styles.Morty}`}>
        <img
          src={MortyImage}
          alt='Morty'
          className={styles.Image}
        />
      </div>
    </div>
  )
}
