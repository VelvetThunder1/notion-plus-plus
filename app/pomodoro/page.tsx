"use client"

import { useState } from "react"
import { RadialChart } from "@/components/radial-chart"
import { Button } from "@/components/ui/button"

export default function ProgressDemo() {
    const [timeVal, setTime] = useState(5)

    const chartData = [
        { time: timeVal}
    ]

    return (
        <div className="flex flex-col">
            <RadialChart chartData={chartData} dataKey="time"></RadialChart>
            <div className="flex justify-center">
                <Button className="mx-5" onClick={() => setTime(5)}>Break</Button>
                <Button className="mx-5" onClick={() => setTime(25)}>Work</Button>
            </div>
        </div>
    )
}
