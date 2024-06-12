import Link from "next/link"

const MenuNav = ({ navStyle }: { navStyle: string }) => {
  return (
    <div
      className={`${navStyle} flexCol absolute right-0 top-16 z-50 min-w-[150px] items-end gap-2 rounded-lg border border-border bg-white/40 p-4 text-lg backdrop-blur-lg transition-all duration-500`}
    >
      <Link href={"/wishlist"} className={"transition-all hover:text-red-500"}>
        Wishlist
      </Link>
      <Link href={"/orders"} className={"transition-all hover:text-red-500"}>
        Orders
      </Link>
    </div>
  )
}

export default MenuNav
