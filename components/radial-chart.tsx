"use client"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  CardContent,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export function RadialChart({ chartData, mode }: { chartData: any[], mode: 'work' | 'break' }) {
  const chartConfig = {
    time: {
      label: "time",
      color: mode === 'work' ? "hsl(var(--chart-2))" : "hsl(var(--chart-5))"
    },
  } satisfies ChartConfig

  const totalSeconds = chartData[0].mins * 60 + parseInt(chartData[0].secs)
  const maxSeconds = mode === 'work' ? 25 * 60 : 5 * 60
  const progressPercentage = (totalSeconds / maxSeconds) * 100

  return (
    <CardContent className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={360}
          innerRadius={80}
          outerRadius={110}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[86, 74]}
          />
          <RadialBar 
            dataKey="time" 
            background 
            cornerRadius={10} 
            fill={mode === 'work' ? "hsl(var(--chart-2))" : "hsl(var(--chart-5))"}
            maxAngle={360}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className={`fill-foreground text-4xl font-bold ${mode === 'break' ? 'text-red-500' : 'text-blue-500'}`}
                      >
                        {chartData[0].mins}:{chartData[0].secs}
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </CardContent>
  )
}

