import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import "./index.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Layout({ children }: { children: any }) {
  return (
    <div className="layout">
      <Navbar />

      <div className="content">{children}</div>

      <Footer />
    </div>
  )
}
