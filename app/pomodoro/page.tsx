"use client"

import * as React from "react"
import { RadialChart } from "@/components/radial-chart"

export default function ProgressDemo() {

    const chartData = [
        { time: 5}
    ]

    return (
        <div className="flex items-center justify-center">
            <RadialChart chartData={chartData} dataKey="time"></RadialChart>
        </div>
    )
}
