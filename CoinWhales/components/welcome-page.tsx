import { Button } from "@/components/ui/button"
import { Bitcoin, Wallet, ChevronDown } from "lucide-react"

interface WelcomePageProps {
  onStart: () => void
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#0F172A] to-indigo-900 animate-gradient-slow" />

        {/* Floating Icons */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 text-blue-400/20 animate-float-slow">
            <Bitcoin size={40} />
          </div>
          <div className="absolute top-40 right-20 text-blue-400/20 animate-float-medium">
            <Wallet size={32} />
          </div>
          <div className="absolute bottom-40 left-1/4 text-blue-400/20 animate-float-fast">🐋</div>
          <div className="absolute top-1/3 right-1/4 text-blue-400/20 animate-float-medium">📈</div>
        </div>

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] opacity-10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <header className="flex items-center gap-4 p-4 border-b border-slate-800/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-lg">🐋</span>
            </div>
            <span className="text-lg font-semibold">Coin Whales</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="max-w-2xl w-full space-y-8 text-center animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Welcome to Coin Whales!
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed">
                Coin Whales is a free, vibrant crypto community dedicated to helping enthusiasts navigate the world of
                cryptocurrency. We share insights, news, tips, and opportunities to help each other grow in the crypto
                space. Whether you're a beginner or an experienced trader, join us to stay updated and connect with
                like-minded individuals!
              </p>
            </div>

            <div className="space-y-6 backdrop-blur-sm bg-slate-900/50 rounded-xl p-6 border border-slate-800/50">
              <p className="text-xl text-blue-400">🔥 Get access to:</p>

              <ul className="space-y-4 text-lg text-slate-200">
                <li
                  className="flex items-center justify-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "200ms" }}
                >
                  <span>🚀</span> Market Updates
                </li>
                <li
                  className="flex items-center justify-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "400ms" }}
                >
                  <span>📊</span> Trading Insights
                </li>
                <li
                  className="flex items-center justify-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "600ms" }}
                >
                  <span>💰</span> Airdrop Alerts
                </li>
                <li
                  className="flex items-center justify-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "800ms" }}
                >
                  <span>📰</span> Crypto News
                </li>
              </ul>
            </div>
          </div>
        </main>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-400/50">
          <ChevronDown size={24} />
        </div>

        {/* Footer */}
        <footer className="p-4 pb-8 backdrop-blur-sm bg-slate-900/50">
          <div className="max-w-lg mx-auto">
            <Button
              className="w-full h-12 text-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 animate-fade-in"
              onClick={onStart}
            >
              Start
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}

