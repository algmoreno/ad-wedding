import React from 'react'
import { Header, Toaster } from '@/components/index';
import "@/styles/globals.css";


export const metadata = {
  title: "D+A",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head >
      <body className="font-decorative">
        {/* <header >
        <Header />
        </header> */}
        <main >
          <Toaster position="bottom-center"/>
          {children}
        </main>
        <footer>
          {/* <Footer/> */}
        </footer>
      </body>
    </html>
  );
}
