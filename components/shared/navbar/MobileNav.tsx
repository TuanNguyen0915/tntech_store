"use client"
import { Button } from "@/components/ui/button"
import { UserButton, useUser } from "@clerk/nextjs"
import { X } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import SearchFunc from "../SearchFunc"

interface IMobileNavProps {
  openMobileMenu: boolean
  setOpenMobileMenu: (openMobileMenu: boolean) => void
}
const MobileNav = ({ openMobileMenu, setOpenMobileMenu }: IMobileNavProps) => {
  const router = useRouter()
  const user = useUser()
  const pathname = usePathname()
  const navStyle = openMobileMenu ? "translate-x-0" : "-translate-x-[100%]"
  const closeMobileMenuHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpenMobileMenu(false)
  }
  return (
    <div
      className={`${navStyle} fixed bottom-0 left-0 right-0 top-0 z-50 h-full bg-black/85 backdrop-blur-sm transition-all duration-500`}
    >
      <X
        size={50}
        className="absolute right-2 top-2 cursor-pointer text-white"
        onClick={closeMobileMenuHandler}
      />
      <div
        className={`${navStyle} flexCol h-full w-[70%] justify-between gap-10 bg-slate-300 p-10 transition-all delay-300 duration-500`}
      >
        <Link
          href={"/"}
          className="text-5xl font-bold tracking-wider text-cyan-500"
        >
          TnTech
        </Link>
        <div className="flexCol mt-4 flex-1 gap-10">
          <SearchFunc mobileNav={true} setOpenMobileMenu={setOpenMobileMenu} />
          <Link href="/" onClick={closeMobileMenuHandler}>
            Home
          </Link>
          <Link
            href={user ? "/cart" : "/sign-in"}
            onClick={closeMobileMenuHandler}
            className={`${pathname === "/cart" && "text-blue-500"}`}
          >
            Cart
          </Link>
          <Link
            href={user ? "/wishlist" : "/sign-in"}
            onClick={closeMobileMenuHandler}
            className={`${pathname === "/wishlist" && "text-blue-500"}`}
          >
            Wishlist
          </Link>
          <Link
            href={user ? "/orders" : "/sign-in"}
            onClick={closeMobileMenuHandler}
            className={`${pathname === "/orders" && "text-blue-500"}`}
          >
            Orders
          </Link>
        </div>
        {user.isSignedIn ? (
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonBox: {
                  flexDirection: "row-reverse",
                  color: "gray",
                },
              },
            }}
          />
        ) : (
          <Button className="w-full" onClick={() => router.push("/sign-in")}>
            Sign in
          </Button>
        )}
      </div>
    </div>
  )
}

export default MobileNav
