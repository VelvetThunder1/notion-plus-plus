"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { RadialChart } from './radial-chart'

const WORK_TIME = 25 * 60
const BREAK_TIME = 5 * 60

export function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME)
  const [isActive, setIsActive] = useState(false)
  const [mode, setMode] = useState<'work' | 'break'>('work')

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      if (interval) clearInterval(interval)
      setIsActive(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft])

  const startTimer = (newMode: 'work' | 'break') => {
    setMode(newMode)
    setTimeLeft(newMode === 'work' ? WORK_TIME : BREAK_TIME)
    setIsActive(false)
  }

  const pauseTimer = () => {
    setIsActive(false)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(mode === 'work' ? WORK_TIME : BREAK_TIME)
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const chartData = [
    {
      time: 100,
      mins: minutes,
      secs: seconds.toString().padStart(2, '0'),
    },
  ]

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>{mode === 'work' ? 'Work Time' : 'Break Time'}</CardTitle>
        <CardDescription>
          {mode === 'work' ? 'Focus on your task' : 'Take a short break'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadialChart chartData={chartData} mode={mode} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          onClick={() => startTimer('work')} 
          variant={mode === 'work' ? 'default' : 'outline'}
          className="flex-1 mr-2"
        >
          Work
        </Button>
        <Button 
          onClick={() => startTimer('break')} 
          variant={mode === 'break' ? 'default' : 'outline'}
          className="flex-1 ml-2"
        >
          Break
        </Button>
      </CardFooter>
      <CardFooter className="flex justify-between">
        <Button 
          onClick={isActive ? pauseTimer : () => {
            setIsActive(true)
          }} 
          variant="secondary"
          className="flex-1 mr-2"
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button 
          onClick={resetTimer} 
          variant="outline"
          className="flex-1 ml-2"
        >
          Reset
        </Button>
      </CardFooter>
    </Card>
  )
}

