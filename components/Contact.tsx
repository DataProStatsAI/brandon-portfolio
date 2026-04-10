"use client"

import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.from("contacts").insert([form])
    if (error) {
      setStatus("❌ Something went wrong. Try again.")
    } else {
      setStatus("✅ Message sent successfully!")
      setForm({ name: "", email: "", message: "" })
    }
  }

  return (
    <section id="contact" className="py-16 px-6 flex justify-center">
      <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-lg border border-white/20">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field */}
          <div className="flex items-center border-b border-gray-300 focus-within:border-blue-500">
            <span className="text-gray-400 mr-2">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none py-2 text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Email field */}
          <div className="flex items-center border-b border-gray-300 focus-within:border-blue-500">
            <span className="text-gray-400 mr-2">📧</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none py-2 text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Message field */}
          <div className="flex items-start border-b border-gray-300 focus-within:border-blue-500">
            <span className="text-gray-400 mr-2 mt-2">💬</span>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent outline-none py-2 text-white placeholder-gray-400"
              rows={4}
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-6 text-center text-sm text-gray-200">{status}</p>}
      </div>
    </section>
  )
}
