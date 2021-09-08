import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import "./index.css"

export function Layout({ children }: { children: any }) {
  return (
    <div className="layout">
      <Navbar />

      <div className="content">{children}</div>

      <Footer />
    </div>
  )
}
