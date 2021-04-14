import React, { useState } from 'react'
import { MainCard } from '../../components/MainCard'
import { CharCounterForm } from '../../components/CharCounterForm'
import { CharCounterList } from '../../components/CharCounterList'
import { TimeCard } from '../../components/TimeCard'
import appStyles from '../../App.module.css'

export const CharCounterScreen = () => {
  const [countList, setCountList] = useState([])
  const [executionTime, setExecutionTime] = useState('')

  const handleSubmit = (result) => {
    setCountList(result.countList)
    setExecutionTime(result.executionTime)
  }

  return (
    <section className={appStyles.layout}>
      <MainCard
        title='Chars Counter'
        description='Choose the letters to count in the names'
      >
        <CharCounterForm onSubmit={handleSubmit} />
      </MainCard>
      {
        (countList && executionTime) &&
          <>
            <CharCounterList countList={countList} />
            <TimeCard
              time={executionTime}
              action='counting the characters'
            />
          </>
      }
    </section>
  )
}
