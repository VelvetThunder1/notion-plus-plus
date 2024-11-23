import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Notion++",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar/>
                <main className="w-full">
                  <SidebarTrigger className="p-5"/>
                  {children}
                  <div className="absolute bottom-5 right-5">
                    <ModeToggle />
                  </div>
                </main>
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
  );
}
