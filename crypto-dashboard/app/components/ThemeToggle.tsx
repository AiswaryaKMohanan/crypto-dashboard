"use client"

import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      Toggle Theme
    </button>
  )
}