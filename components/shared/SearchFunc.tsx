"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface ISearchFuncProps {
  mobileNav?: boolean
  setOpenMobileMenu?: (openMobileMenu: boolean) => void
}

const SearchFunc = ({ mobileNav, setOpenMobileMenu }: ISearchFuncProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  return (
    <div className="flex w-full items-center gap-4 rounded-lg border border-border bg-white px-4 py-2">
      <Search size={28} />
      <input
        className="w-full bg-transparent outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search ..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && searchQuery.length > 0) {
            router.push(`/search/${searchQuery}`)
            setSearchQuery("")
            if (mobileNav) {
              if (setOpenMobileMenu) {
                setOpenMobileMenu(false)
              }
            }
          }
        }}
      />
    </div>
  )
}

export default SearchFunc
