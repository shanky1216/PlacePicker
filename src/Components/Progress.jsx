import React, { useEffect, useState } from 'react'

const Progress = ({TIMER}) => {
    const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 10)
        },10)
        return() => {
            clearInterval(interval)
        }
    },[])
  return (
    <progress value={remainingTime} max={TIMER}/>
  )
}

export default Progress