import { ArrowLeft, MoreVertical, Paperclip, Send, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function OnboardingPage() {
  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center gap-4 p-4 border-b border-slate-800">
        <button className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-lg">🐋</span>
          </div>
          <span className="text-lg font-semibold">Coin Whales</span>
        </div>
        <button className="p-2 ml-auto">
          <MoreVertical className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-lg mx-auto p-4">
          {/* Video Placeholder */}
          <div className="aspect-video bg-slate-800 rounded-lg mb-8 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1" />
            </div>
          </div>

          {/* How To Join Section */}
          <div className="space-y-6">
            <h2 className="text-2xl text-blue-400">How To Join</h2>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <h3 className="text-xl mb-1">Step 1</h3>
                <p className="text-slate-400">
                  Sign up using our affiliate link:{" "}
                  <a
                    href="https://blofin.com/your-affiliate-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Click Here
                  </a>
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <h3 className="text-xl mb-1">Step 2</h3>
                <p className="text-slate-400">Send me your email after signing up.</p>
              </div>

              {/* Step 3 */}
              <div className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <h3 className="text-xl mb-1">Step 3</h3>
                <p className="text-slate-400">I'll verify and send you the invite link!</p>
              </div>

              {/* Step 4 */}
              <div className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <h3 className="text-xl mb-1">Step 4</h3>
                <p className="text-slate-400">
                  Gain Instant access to{" "}
                  <a
                    href="https://t.me/BlockNinjaBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    https://t.me/BlockNinjaBot
                  </a>
                </p>
              </div>
            </div>

            <Button className="w-full h-12 text-lg bg-blue-500 hover:bg-blue-600">Continue To Registration</Button>
          </div>
        </div>
      </main>

      {/* Footer Chat */}
      <footer className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-2 max-w-lg mx-auto">
          <Button variant="secondary" className="bg-blue-500 hover:bg-blue-600">
            Open Verification App
          </Button>
          <Button variant="ghost" size="icon">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Input placeholder="Write a message..." className="flex-1 bg-slate-800 border-slate-700" />
          <Button variant="ghost" size="icon">
            <Smile className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </footer>
    </div>
  )
}

