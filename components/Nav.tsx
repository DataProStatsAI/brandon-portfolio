"use client"

import Link from "next/link"

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-400 to-blue-700 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center space-x-8">
        <Link href="/" className="text-xl font-bold tracking-wide">
          The Data Prophet
        </Link>
        <Link href="#about" className="hover:text-gray-200 transition">About</Link>
        <Link href="#skills" className="hover:text-gray-200 transition">Skills</Link>
        <Link href="#education" className="hover:text-gray-200 transition">Education</Link>
        <Link href="#research" className="hover:text-gray-200 transition">Research</Link>
        <Link href="#contact" className="hover:text-gray-200 transition">Contact</Link>
      </div>
    </nav>
  )
}
