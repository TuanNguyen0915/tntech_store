import Banner from "@/components/shared/banner/Banner"
import Collections from "@/components/shared/collections/Collections"
import Navbar from "@/components/shared/navbar/Navbar"
import Products from "@/components/shared/products/Products"

const RootPage = () => {
  return (
    <div className="flexCol h-full w-full gap-10">
      <Banner />
      <Collections />
      <Products />
    </div>
  )
}

export default RootPage
export const dynamic = "force-dynamic"