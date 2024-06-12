import Loader from "@/components/shared/Loader"
import { DotLoader } from "react-spinners"

const loading = () => {
  return (
    <div className="flexCenter h-[80vh] w-full">
      <Loader size={40}/>
    </div>
  )
}

export default loading
