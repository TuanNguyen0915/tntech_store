import GetCurrentUser from "@/components/shared/GetCurrentUser"
import Navbar from "@/components/shared/navbar/Navbar"
import { Toaster } from "react-hot-toast"
const DashBoardLayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full space-y-2 ">
      <GetCurrentUser />
      <Navbar />
      <div className="max-lg:p-4">{children}</div>
      <div>
        <Toaster position="top-center" />
      </div>
    </div>
  )
}

export default DashBoardLayOut
