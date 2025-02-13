import { Telegram } from "telegraf"

// Initialize Telegram bot with your bot token
const telegram = new Telegram(process.env.TELEGRAM_BOT_TOKEN || "")

export async function createInviteLink(chatId: string) {
  try {
    const link = await telegram.createChatInviteLink(chatId, {
      expire_date: Math.floor(Date.now() / 1000) + 3600, // Link expires in 1 hour
      member_limit: 1, // One-time use link
    })
    return link.invite_link
  } catch (error) {
    console.error("Error creating invite link:", error)
    throw error
  }
}

export async function verifyRegistration(userId: string) {
  // Implement your verification logic here
  // Check if user has completed all required steps
  return true
}

