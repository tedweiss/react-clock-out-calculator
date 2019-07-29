import React, { useState } from 'react'
import styled from 'styled-components'

import ClockOutSelection from './ClockOutSelection'
import Button from './Button'

const ChoicesContainer = styled.div`
  width: 300px;
  margin: 40px auto 0;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`

const ClockOutChoices = () => {
  const [screen, setScreen] = useState(0)
  const updateScreen = newScreen => {
    setScreen(newScreen)
  }
  return (
    <ChoicesContainer className={'choices-container'}>
      {screen === 0 && (
        <>
          <div>What time to clock out?</div>
          <Button
            handleClick={() => {
              updateScreen(1)
            }}
            text={'End of Day'}
          />
          <Button
            handleClick={() => {
              updateScreen(2)
            }}
            text={'End of Week'}
          />
          <Button
            handleClick={() => {
              updateScreen(3)
            }}
            text={'End of Two Weeks'}
          />
          <Button
            handleClick={() => {
              updateScreen(4)
            }}
            text={'Get on Track'}
          />
        </>
      )}
      {screen === 1 && <ClockOutSelection updateScreen={updateScreen} />}
      {screen === 2 && <ClockOutSelection updateScreen={updateScreen} endOfWeek />}
      {screen === 3 && <ClockOutSelection updateScreen={updateScreen} endOf2Weeks />}
      {screen === 4 && <ClockOutSelection updateScreen={updateScreen} getOnTrack />}
    </ChoicesContainer>
  )
}

export default ClockOutChoices
