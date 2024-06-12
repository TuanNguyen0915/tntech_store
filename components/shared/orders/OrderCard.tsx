import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IOrder } from "@/lib/types"
import OrderItem from "./OrderItem"

interface IOrderCardProps {
  order: IOrder
}
const OrderCard = ({ order }: IOrderCardProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flexBetween">
          <p className="lg:pl-10">
            Order:{" "}
            <span className="text-blue-500 transition-all hover:brightness-125">
              {order._id}
            </span>
          </p>
          <p className="max-md:hidden">
            Date: {new Date(order.createdAt).toLocaleString()}
          </p>
          <p className="text-end">
            Amount:{" "}
            <span className="text-blue-500 transition-all hover:brightness-125">
              ${order.totalAmount}
            </span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="flexCol gap-4">
          <p className="md:hidden">
            Date: {new Date(order.createdAt).toLocaleString()}
          </p>
          <p>
            Shipping Address: {order.shippingAddress.street} ,{" "}
            {order.shippingAddress.city},{order.shippingAddress.state},{" "}
            {order.shippingAddress.postalCode}, {order.shippingAddress.country}
          </p>
          <p>Shipping Rate: ${order.shippingRate}</p>
          <div className="flexCol w-full gap-6">
            {order.products.map((product) => (
              <OrderItem
                key={product.product._id}
                product={product.product}
                quantity={product.quantity}
                size={product.size}
                color={product.color}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default OrderCard
