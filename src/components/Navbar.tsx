import React from 'react'
import image from '../img/imagetrans.jpg'

export function Navbar() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-800 border-gray-400 flex fixed md:py-5 w-screen justify-between items-center border-solid border box-border shadow-lg">
      <div className="flex">
        <img className="md:ml-80" src={image}/>
        <a className="text-gray-900 dark:text-white ml-12 mt-8" href="/">Home</a>
      </div>
    </nav>
  )
}
