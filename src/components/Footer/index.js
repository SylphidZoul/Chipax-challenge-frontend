import React from 'react'
import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.Text}>
        Developed by
        <a
          href='https://jcruzcardozo.com'
          target='_blank'
          rel='noreferrer'
          className={styles.Link}
        >
          @Juan Cruz Cardozo
        </a>
      </p>
    </footer>
  )
}
