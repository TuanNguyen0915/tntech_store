"use client"
import Container from "@/components/shared/Container"
import Loader from "@/components/shared/Loader"
import OrderCard from "@/components/shared/orders/OrderCard"
import { getOrdersByCustomerId } from "@/lib/actions"
import { IOrder } from "@/lib/types"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState, useTransition } from "react"

const OrdersPage = () => {
  const { user } = useUser()
  const [orders, setOrders] = useState<IOrder[]>([])
  const [transition, startTransition] = useTransition()
  useEffect(() => {
    startTransition(async () => {
      if (user) {
        const res = await getOrdersByCustomerId(user.id)
        setOrders(res)
      }
    })
  }, [user?.id])
  if (transition)
    return (
      <div className="flexCenter h-[80vh] w-full">
        <Loader size={60} />
      </div>
    )
  return (
    <Container>
      <div className="flexCol mt-10 w-full gap-8">
        <h1 className="heading2 text-center">Order History</h1>
        <div className="w-full space-y-16">
          {orders.length === 0 ? (
            <p className="w-full text-center">No orders</p>
          ) : (
            orders.map((order) => <OrderCard key={order._id} order={order} />)
          )}
        </div>
      </div>
    </Container>
  )
}

export default OrdersPage
export const dynamic = "force-dynamic"
