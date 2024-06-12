"use client"

import { getCurrentUser } from "@/lib/actions/user.action"
import { useUserStore } from "@/lib/hook/useUser"

import { useUser } from "@clerk/nextjs"
import { useEffect } from "react"

const GetCurrentUser = () => {
  const { user } = useUser()
  const { currentUser, setCurrentUser } = useUserStore()
  const getUser = async () => {
    const res = await getCurrentUser()
    if (res.user) {
      setCurrentUser(res.user)
    }
  }
  useEffect(() => {
    if (user) getUser()
  }, [user])

  return <></>
}

export default GetCurrentUser
