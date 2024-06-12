"use client"
import { DotLoader } from "react-spinners"
const Loader = ({
  size,
  style,
  color,
}: {
  size?: number
  style?: string
  color?: string
}) => {
  return (
    <DotLoader
      size={size ? size : 24}
      className={`${style}`}
      color={color ? color : "blue"}
    />
  )
}

export default Loader
