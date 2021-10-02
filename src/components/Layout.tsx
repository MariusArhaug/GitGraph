import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Header } from './Header'

import '../styles/global.css'
import { ToggleButton } from './ToggleButton'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Layout({ children }: { children: any }) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen max-w-screen-xl my-0 mx-auto ">
        <Header />
        <ToggleButton/>
        <div className="flex-grow">{children}</div>
      </div>
      <Footer />
    </div>
  )
}