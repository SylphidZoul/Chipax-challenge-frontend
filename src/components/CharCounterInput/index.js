import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const CharCounterInput = ({ name, label, initialValue }) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e) => {
    e.target.value.match(/^([a-z]{1}|)$/) &&
      setValue(e.target.value)
  }

  return (
    <div className={styles.InputWrapper}>
      <label
        className={styles.InputLabel}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={styles.InputBox}
        value={value}
        type='text'
        name={name}
        maxLength={1}
        onChange={handleChange}
        autoComplete='false'
      />
    </div>
  )
}

CharCounterInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initialValue: PropTypes.string.isRequired
}
