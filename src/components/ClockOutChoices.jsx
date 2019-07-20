import React, { useState } from 'react'

import ClockOutSelection from './ClockOutSelection'

const ClockOutChoices = () => {
  const [screen, setScreen] = useState(0)
  const updateScreen = newScreen => {
    setScreen(newScreen)
  }
  return (
    <>
      {screen === 0 && (
        <>
          <div>What time to clock out?</div>
          <button
            onClick={() => {
              updateScreen(1)
            }}>
            End of Day
          </button>
          <button
            onClick={() => {
              updateScreen(2)
            }}>
            End of Week
          </button>
        </>
      )}
      {screen === 1 && <ClockOutSelection updateScreen={updateScreen} screen={screen} />}
      {screen === 2 && <ClockOutSelection updateScreen={updateScreen} screen={screen} endOfWeek />}
    </>
  )
}

export default ClockOutChoices
