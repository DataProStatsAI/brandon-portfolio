
"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-blue-700 text-white text-center">
      {/* Profile Picture */}
      <div className="mb-6 flex justify-center">
        <img
  src="http://localhost:3000/profile.jpg"
  alt="The Data Prophet"
  width={180}
  height={180}
  className="rounded-full border-4 border-white shadow-lg mx-auto"
/>
      </div>

      {/* Name + Nickname */}
      <h1 className="text-5xl font-extrabold mb-4">I’m The Data Prophet</h1>
      <p className="text-xl max-w-2xl mb-8">
        Applied statistician, career counsellor, and developer building data-driven solutions in Zimbabwe’s informal sector.
      </p>

      {/* Call to Action */}
      <a
        href="#contact"
        className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        Get In Touch
      </a>
    </section>
  )
}
