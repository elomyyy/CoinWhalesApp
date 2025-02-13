"use client"

import { useState } from "react"
import { WelcomePage } from "@/components/welcome-page"
import { RegistrationFlow } from "@/components/registration-flow"

export default function TelegramMiniApp() {
  const [started, setStarted] = useState(false)

  if (!started) {
    return <WelcomePage onStart={() => setStarted(true)} />
  }

  return <RegistrationFlow />
}

