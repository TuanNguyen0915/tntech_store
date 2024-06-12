import User from "@/lib/database/models/user.model"
import { connectDB } from "@/lib/database/mongoDB"
import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized", success: false },
        { status: 401 },
      )
    }
    await connectDB()
    const user = await User.findOne({ clerkId: userId })
    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 404 },
      )
    }
    const { productId } = await req.json()
    if (!productId) {
      return NextResponse.json(
        { message: "Product not found", success: false },
        { status: 404 },
      )
    }
    //Handle add or remove to wishlist
    const isLiked = user.wishList.includes(productId)
    // Remove
    if (isLiked) {
      user.wishList =  user.wishList.filter((id: string) => id !== productId)
    } else {
      // Add
      await user.wishList.push(productId)
    }
    await user.save()
    return NextResponse.json({ user: user, success: true }, { status: 200 })
  } catch (error) {
    console.log("WishList_POST", error)
    return NextResponse.json(
      { message: "Interval Server Error" },
      { status: 500 },
    )
  }
}
