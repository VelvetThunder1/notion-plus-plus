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

export function RadialChart({chartData, dataKey}) {

    console.log(dataKey)

    const chartConfig = {
        [dataKey]: {
          label: dataKey,
          color: "hsl(var(--chart-1))"
        },
      } satisfies ChartConfig

    return (
        <CardContent className="flex-1 pb-0">
            <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
            >
            <RadialBarChart
                data={chartData}
                startAngle={0}
                endAngle={0 + (chartData[0]?.[dataKey]/25)*360}
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
                <RadialBar dataKey={dataKey} background cornerRadius={10} fill={`var(--color-${dataKey})`}/>
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
                            className="fill-foreground text-4xl font-bold"
                            >
                            {chartData[0]?.[dataKey].toLocaleString()}
                            </tspan>
                            <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                            >
                            Mins
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
