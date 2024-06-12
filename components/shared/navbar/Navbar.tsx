"use client"
import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react"
import { useState } from "react"
import MobileNav from "./MobileNav"
import useCart from "@/lib/hook/useCart"

import SearchFunc from "../SearchFunc"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const { user } = useUser()
  const cart = useCart()
  const pathname = usePathname()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <div className="flexBetween sticky top-0 z-20 rounded-b-lg bg-white px-2 py-4 shadow-md">
      <Link
        href={"/"}
        className="text-5xl font-bold tracking-wider text-cyan-500"
      >
        TnTech
      </Link>
      <div className="flex items-center gap-4 max-md:hidden">
        <Link href="/">Home</Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`${pathname === "/wishlist" && "text-blue-500"}`}
        >
          WishList
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`${pathname === "/orders" && "text-blue-500"}`}
        >
          Orders
        </Link>
        <SearchFunc />
      </div>
      <div className="relative flex items-center justify-end gap-4">
        <Link
          href={"/cart"}
          className="flex items-center gap-2 rounded-md border border-border p-2 transition-all duration-300 hover:bg-black/80 hover:text-white"
        >
          <ShoppingCart size={28} />
          <p>({cart.cartItems.length > 0 ? cart.cartItems.length : 0})</p>
        </Link>
        <div className="flex items-center gap-4 max-md:hidden">
          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/sign-in">
              <CircleUserRound size={28} />
            </Link>
          )}
        </div>
        <div
          className="flexCenter px-4 md:hidden"
          onClick={() => setOpenMobileMenu(true)}
        >
          <Menu className="cursor-pointer" />
          <MobileNav
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
