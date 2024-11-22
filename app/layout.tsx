import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Notion+",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html>
        <body>
          <SidebarProvider>
            <AppSidebar/>
              <main className="w-full">
                <SidebarTrigger/>
                {children}
              </main>
          </SidebarProvider>
        </body>
      </html>
  );
}
