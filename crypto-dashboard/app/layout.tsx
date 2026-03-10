import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./store/Provider";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "Crypto Dashboard",
  description: "Real-time cryptocurrency analytics dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">        
        <ReduxProvider>
          
          <header className="flex justify-between items-center p-6 border-b dark:border-gray-800">
            <h1 className="text-2xl font-bold">
              Crypto Dashboard
            </h1>
            <ThemeToggle />
          </header>

          <main className="max-w-7xl mx-auto p-6">
            {children}
          </main>

        </ReduxProvider>

      </body>
    </html>
  );
}