import React, { useState } from 'react'
import './App.css'
import { CharCounterScreen } from './screens/CharCounterScreen'
import { EpisodeLocationsScreen } from './screens/EpisodeLocationsScreen'
import { Background } from './components/Background'
import { ScreenToggleButton } from './components/ScreenToggleButton'
import { Footer } from './components/Footer'

const App = () => {
  const [isCharCounterActive, setIsCharCounterActive] = useState(true)

  return (
    <>
      <Background />
      <ScreenToggleButton
        inactiveScreenName={isCharCounterActive ? 'Episode Locations' : 'Chars Counter'}
        onClick={() => setIsCharCounterActive(prev => !prev)}
      />
      {
        isCharCounterActive
          ? <CharCounterScreen />
          : <EpisodeLocationsScreen />
      }
      <Footer />
    </>
  )
}

export default App
