import React, { useState } from 'react'

import { calculateClockOutTime } from '../utils'

const ClockOutSelection = props => {
  const { endOfWeek, endOf2Weeks, getOnTrack } = props
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [displayTime, setDisplayTime] = useState(false)
  const [lunchTime, setLunchTime] = useState(0)
  const [timeSoFar, setTimeSoFar] = useState()
  const [daysSoFar, setDaysSoFar] = useState(endOfWeek ? 4 : endOf2Weeks ? 9 : 0)
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
    let time = calculateClockOutTime(hours, minutes, lunchTime, timeSoFar, daysSoFar)
    setClockOutTime({
      hours: time.hours,
      minutes: time.minutes,
      amPm: time.amPm
    })
    setDisplayTime(true)
  }

  return (
    <>
      {(endOfWeek || endOf2Weeks || getOnTrack) && (
        <>
          <label>Total Time so Far:</label>
          <input
            type={'number'}
            onChange={e => {
              setTimeSoFar(e.target.value)
            }}
          />
        </>
      )}
      {getOnTrack && (
        <>
          <label>Work Days so Far:</label>
          <input
            type={'number'}
            onChange={e => {
              setDaysSoFar(e.target.value)
            }}
          />
        </>
      )}
      <label>Clock In Time:</label>
      <input type={'time'} onBlur={handleBlur} onChange={handleInputChange} />
      <label>Minutes for Lunch</label>
      <input
        type={'number'}
        onChange={e => {
          setLunchTime(e.target.value)
        }}
      />
      <button onClick={handleClick}>Find Clock Out Time</button>
      {displayTime && (
        <div>
          {clockOutTime.hours}:{clockOutTime.minutes} {clockOutTime.amPm}
        </div>
      )}
    </>
  )
}

export default ClockOutSelection
