"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, MoreVertical, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function RegistrationFlow() {
  const [email, setEmail] = useState("")
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit email")
      }

      toast({
        title: "Success!",
        description: "Email submitted successfully",
      })
      setStep(4)
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit email",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    // Trigger animation when step changes
    const stepCards = document.querySelectorAll(".step-card")
    stepCards.forEach((card, index) => {
      card.classList.remove("animate-fade-in-up")
      void card.offsetWidth // Trigger reflow
      card.classList.add("animate-fade-in-up")
      card.style.animationDelay = `${index * 100}ms`
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0F172A] to-indigo-900 animate-gradient-slow" />
        <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] opacity-10 mix-blend-overlay" />
      </div>

      {/* Header */}
      <header className="relative flex items-center gap-4 p-4 border-b border-slate-800/50 backdrop-blur-sm">
        <button className="p-2 transition-transform hover:scale-110">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-lg">🐋</span>
          </div>
          <span className="text-lg font-semibold">Coin Whales</span>
        </div>
        <button className="p-2 ml-auto transition-transform hover:scale-110">
          <MoreVertical className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 overflow-auto">
        <div className="max-w-lg mx-auto p-4 pt-6 space-y-6">
          {/* Progress Indicator */}
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    i <= step ? "bg-blue-500 text-white" : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {i < step ? <Check className="w-5 h-5" /> : i}
                </div>
                {i < 4 && (
                  <div
                    className={`w-full h-1 transition-all duration-300 ${i < step ? "bg-blue-500" : "bg-slate-700"}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Steps Section */}
          <div className="space-y-4">
            <h2 className="text-2xl text-blue-400 animate-fade-in">How To Join</h2>

            <div className="space-y-3">
              <div
                className={`step-card p-4 rounded-lg transition-all duration-300 ${step === 1 ? "bg-blue-500" : "bg-slate-800/50 backdrop-blur-sm"}`}
              >
                <h3 className="text-xl mb-1">Step 1</h3>
                <p className="text-slate-200">Register with Broker Affiliate link with Blofin</p>
                {step === 1 && (
                  <Button
                    className="mt-3 bg-white text-blue-500 hover:bg-white/90 transition-all duration-300 hover:scale-105"
                    onClick={() => setStep(2)}
                  >
                    Register Now
                  </Button>
                )}
              </div>

              <div
                className={`step-card p-4 rounded-lg transition-all duration-300 ${step === 2 ? "bg-blue-500" : "bg-slate-800/50 backdrop-blur-sm"}`}
              >
                <h3 className="text-xl mb-1">Step 2</h3>
                <p className="text-slate-200">Register with BlockNinja</p>
                {step === 2 && (
                  <Button
                    className="mt-3 bg-white text-blue-500 hover:bg-white/90 transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      window.open("https://t.me/BlockNinjaBot", "_blank")
                      setStep(3)
                    }}
                  >
                    Start Bot
                  </Button>
                )}
              </div>

              <div
                className={`step-card p-4 rounded-lg transition-all duration-300 ${step === 3 ? "bg-blue-500" : "bg-slate-800/50 backdrop-blur-sm"}`}
              >
                <h3 className="text-xl mb-1">Step 3</h3>
                <p className="text-slate-200">Enter your email address</p>
                {step === 3 && (
                  <form onSubmit={handleEmailSubmit} className="mt-3 space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={isSubmitting}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-white text-blue-500 hover:bg-white/90 transition-all duration-300 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Email"}
                    </Button>
                  </form>
                )}
              </div>

              <div
                className={`step-card p-4 rounded-lg transition-all duration-300 ${step === 4 ? "bg-blue-500" : "bg-slate-800/50 backdrop-blur-sm"}`}
              >
                <h3 className="text-xl mb-1">Step 4</h3>
                <p className="text-slate-200">Gain instant access to our Free Coin Whales group</p>
                {step === 4 && (
                  <Button
                    className="mt-3 bg-white text-blue-500 hover:bg-white/90 transition-all duration-300 hover:scale-105"
                    onClick={() => setStep(1)}
                  >
                    Access Group
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-2 max-w-lg mx-auto">
          <Button className="flex-1 bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-105">
            Continue To Registration
          </Button>
        </div>
      </footer>
    </div>
  )
}

