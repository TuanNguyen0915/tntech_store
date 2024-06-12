import mongoose from "mongoose"

let isConnected = false
export const connectDB = async () => {
  mongoose.set("strictQuery", true)
  if (isConnected) {
    console.log("MongoDb is already connected")
    return
  } else {
    try {
      await mongoose.connect(process.env.DATABASE_URI as string)
      console.log("MongoDb is connected")
      isConnected = true
    } catch (error) {
      console.log(error)
    }
  }
}
