import React, { useState } from 'react'

import EndOfDay from './EndOfDay'

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
        </>
      )}
      {screen === 1 && <EndOfDay updateScreen={updateScreen} />}
    </>
  )
}

export default ClockOutChoices
