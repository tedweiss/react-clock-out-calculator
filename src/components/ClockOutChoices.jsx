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
          <button
            onClick={() => {
              updateScreen(3)
            }}>
            End of Two Weeks
          </button>
          <button
            onClick={() => {
              updateScreen(4)
            }}>
            Get on Track
          </button>
        </>
      )}
      {screen === 1 && <ClockOutSelection updateScreen={updateScreen} />}
      {screen === 2 && <ClockOutSelection updateScreen={updateScreen} endOfWeek />}
      {screen === 3 && <ClockOutSelection updateScreen={updateScreen} endOf2Weeks />}
      {screen === 4 && <ClockOutSelection updateScreen={updateScreen} getOnTrack />}
    </>
  )
}

export default ClockOutChoices
