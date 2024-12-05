"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Timer,
  Calendar,
  Folder,
  ListCheck
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavTools } from "@/components/nav-tools"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { DatePicker } from "@/components/date-picker"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator
} from "@/components/ui/sidebar"

const pages = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Jayan",
      logo: AudioWaveform,
      plan: "Free",
    },
    {
      name: "Rashwanth",
      logo: GalleryVerticalEnd,
      plan: "Free",
    },
    {
      name: "Amrita",
      logo: Command,
      plan: "Pro",
    },
  ],
  navMain: [
    {
      title: "Folder 1",
      url: "#",
      icon: Folder,
      isActive: true,
      items: [
        {
          title: "Page 1",
          url: "#",
        },
        {
          title: "Page 2",
          url: "#",
        },
        {
          title: "Page 3",
          url: "#",
        },
      ],
    },
    {
      title: "Folder 2",
      url: "#",
      icon: Folder,
      isActive: true,
      items: [
        {
          title: "Page 1",
          url: "#",
        },
        {
          title: "Page 2",
          url: "#",
        },
        {
          title: "Page 3",
          url: "#",
        },
      ],
    },
    {
      title: "Folder 3",
      url: "#",
      icon: Folder,
      isActive: true,
      items: [
        {
          title: "Page 1",
          url: "#",
        },
        {
          title: "Page 2",
          url: "#",
        },
        {
          title: "Page 3",
          url: "#",
        },
      ],
    },
  ],
  tools: [
    {
      name: "Pomodoro",
      url: "/pomodoro",
      icon: Timer,
    },
    {
      name: "Calendar",
      url: "/calendar",
      icon: Calendar,
    },
    {
      name: "Todo",
      url: "/todo",
      icon: ListCheck,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-sidebar-border border-b">
        <TeamSwitcher teams={pages.teams} />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker></DatePicker>
        <SidebarSeparator className="mx-0" />
        <NavMain items={pages.navMain} />
        <SidebarSeparator className="mx-0" />
        <NavTools tools={pages.tools} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={pages.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
