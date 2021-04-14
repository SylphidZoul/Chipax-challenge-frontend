import React, { useState } from 'react'
import { useHttp } from '../../hooks/useHttp'
import { MainCard } from '../../components/MainCard'
import { CardButton } from '../../components/CardButton'
import { TimeCard } from '../../components/TimeCard'
import { SpinnerToast } from '../../components/SpinnerToast'
import { ErrorToast } from '../../components/ErrorToast'
import { EpisodeLocationsList } from '../../components/EpisodeLocationsList'
import appStyles from '../../App.module.css'

export const EpisodeLocationsScreen = () => {
  const { isFetching, error, httpGet } = useHttp()
  const [executionTime, setExecutionTime] = useState('')
  const [episodesList, setEpisodesList] = useState([])

  const handleClick = async () => {
    try {
      const { data: { episodeLocations, executionTime } } = await httpGet('episodelocations')
      setExecutionTime(executionTime)
      setEpisodesList(episodeLocations)
    } catch {}
  }

  return (
    <section className={appStyles.layout}>
      <MainCard
        title='Episode Locations'
        description='Get the origin locations of all characters that appeared in each episode'
      >
        <CardButton
          type='button'
          onClick={handleClick}
        >
          Get the list
        </CardButton>
      </MainCard>
      {
        (episodesList && executionTime) &&
          <>
            <TimeCard
              time={executionTime}
              action="ordering the character's origin by episodes"
            />
            <EpisodeLocationsList episodesList={episodesList} />
          </>
      }
      <SpinnerToast isFetching={isFetching} />
      <ErrorToast errorMessage={error} />
    </section>
  )
}
