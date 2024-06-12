import User from "@/lib/database/models/user.model"
import { connectDB } from "@/lib/database/mongoDB"
import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized", success: false },
        { status: 401 },
      )
    }
    await connectDB()
    let user = await User.findOne({ clerkId: userId })
    if (!user) {
      user = await User.create({ clerkId: userId })
      await user.save()
    }
    return NextResponse.json({ user, success: true }, { status: 200 })
  } catch (error) {
    console.log("User_GET", error)
    return NextResponse.json(
      { message: "Interval Server Error" },
      { status: 500 },
    )
  }
}
