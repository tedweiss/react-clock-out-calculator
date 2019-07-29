import React, { useState } from 'react'
import styled from 'styled-components'

import Button from './Button'
import InputLabel from './InputLabel'
import { calculateClockOutTime } from '../utils'

const Back = styled.p`
  cursor: pointer;
  text-align: left;
`
const DisplayedTime = styled.p`
  margin: 30px 0;
`

const ClockOutSelection = props => {
  const { endOfWeek, endOf2Weeks, getOnTrack, updateScreen } = props
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
      <Back onClick={() => updateScreen(0)}>{'<'} Back</Back>
      {(endOfWeek || endOf2Weeks || getOnTrack) && (
        <InputLabel label={'Total Time so Far:'} type={'number'} onChange={e => setTimeSoFar(e.target.value)} />
      )}
      {getOnTrack && (
        <InputLabel label={'Work Days so Far:'} type={'number'} onChange={e => setDaysSoFar(e.target.value)} />
      )}
      <InputLabel label={'Clock In Time:'} type={'time'} onBlur={handleBlur} onChange={handleInputChange} />
      <InputLabel label={'Minutes for Lunch:'} type={'number'} onChange={e => setLunchTime(e.target.value)} />
      <Button handleClick={handleClick} text={'Find Clock Out Time'} />
      {displayTime && (
        <DisplayedTime>
          {clockOutTime.hours}:{clockOutTime.minutes} {clockOutTime.amPm}
        </DisplayedTime>
      )}
    </>
  )
}

export default ClockOutSelection
