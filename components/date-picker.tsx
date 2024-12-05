"use client"

import { CalendarIcon } from 'lucide-react'
import { useState } from "react"
import { format } from "date-fns"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  useSidebar
} from "@/components/ui/sidebar"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
  const { state } = useSidebar()
  const [date, setDate] = useState<Date | undefined>(new Date())

  const isCollapsed = state === "collapsed"

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        {isCollapsed ? (
          <Popover>
            <PopoverTrigger asChild>
              <SidebarMenuButton
                tooltip="Select Date"
                className="w-full justify-center"
              >
                <CalendarIcon className="h-4 w-4" />
              </SidebarMenuButton>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        ) : (
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]"
          />
        )}
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

