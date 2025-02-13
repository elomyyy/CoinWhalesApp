import { NextResponse } from "next/server"
import { Telegram } from "telegraf"

const telegram = new Telegram(process.env.TELEGRAM_BOT_TOKEN || "")

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Store email (implement your database logic here)
    // For now, we'll just log it
    console.log("Email submitted:", email)

    // You could add the user to a Telegram group here
    // const chatId = "your-group-id"
    // await telegram.createChatInviteLink(chatId, {
    //   expire_date: Math.floor(Date.now() / 1000) + 3600,
    //   member_limit: 1
    // })

    return NextResponse.json({
      success: true,
      message: "Email submitted successfully",
    })
  } catch (error) {
    console.error("Email submission error:", error)
    return NextResponse.json({ error: "Failed to process email submission" }, { status: 500 })
  }
}

