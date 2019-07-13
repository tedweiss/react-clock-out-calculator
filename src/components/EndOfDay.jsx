import React, { useState } from 'react'

import { calculateClockOutTime } from '../utils'

const EndOfDay = () => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [displayTime, setDisplayTime] = useState(false)
  const [lunchTime, setLunchTime] = useState(0)
  const [clockOutTime, setClockOutTime] = useState()

  const handleBlur = e => {
    let time = e.target.value.split(':')
    let hours = time[0]
    let minutes = time[1]
    if (hours.indexOf('0') === 0) {
      // removes "0" in front if less than "10"
      hours = hours.substr(1)
    }
    setHours(hours)
    setMinutes(minutes)
  }
  const handleInputChange = () => {
    if (displayTime) {
      setDisplayTime(false)
    }
  }
  const handleClick = () => {
    let time = calculateClockOutTime(hours, minutes)
    setClockOutTime({
      hours: time.hours,
      minutes: time.minutes,
      amPm: time.amPm
    })
    setDisplayTime(true)
  }

  return (
    <>
      <input type={'time'} onBlur={handleBlur} onChange={handleInputChange} />
      <button onClick={handleClick}>Find Clock Out Time</button>
      {displayTime && (
        <div>
          {clockOutTime.hours}:{clockOutTime.minutes} {clockOutTime.amPm}
        </div>
      )}
    </>
  )
}

export default EndOfDay
