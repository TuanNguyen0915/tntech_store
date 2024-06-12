import { ICollection } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

interface ICollectionCardProps {
  collection: ICollection
}

const CollectionCard = ({ collection }: ICollectionCardProps) => {
  return (
    <Link
      href={`/collections/${collection._id}`}
      key={collection._id}
      className="group relative h-[200px] w-[350px] overflow-hidden rounded-lg"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-lg bg-black/20 transition-all duration-300 group-hover:bg-transparent"></div>
      <Image
        src={collection.image}
        key={collection._id}
        alt={collection.title}
        fill
        className="cursor-pointer rounded-lg object-cover transition-all duration-300 group-hover:scale-110"
      />
    </Link>
  )
}

export default CollectionCard
