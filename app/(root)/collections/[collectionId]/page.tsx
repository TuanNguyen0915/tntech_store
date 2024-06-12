"use client"
import Container from "@/components/shared/Container"
import Loader from "@/components/shared/Loader"
import CollectionCard from "@/components/shared/collections/CollectionCard"
import ProductCard from "@/components/shared/products/ProductCard"
import { getCollectionById } from "@/lib/actions"
import { useCollectionsStore } from "@/lib/hook/useCollections"
import { ICollection } from "@/lib/types"
import Image from "next/image"
import { useEffect, useState, useTransition } from "react"

const CollectionDetails = ({
  params,
}: {
  params: { collectionId: string }
}) => {
  const { collectionsStore } = useCollectionsStore()
  const [collection, setCollection] = useState<ICollection | null>()
  const [transition, setTransition] = useTransition()

  useEffect(() => {
    setTransition(async () => {
      const res = await getCollectionById(params.collectionId)
      setCollection(res)
    })
  }, [params.collectionId])

  if (transition && !collection) {
    return (
      <div className="flexCenter h-[80vh] w-full">
        <Loader />
      </div>
    )
  }
  if (collection) {
    return (
      <Container>
        <div className="flexCol w-full gap-4">
          <div className="relative h-[50vh] w-full rounded-lg">
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="rounded-lg object-contain"
            />
          </div>
          <h1 className="heading1 text-center">{collection.title}</h1>
          <p className="text-center text-gray-400">{collection.description}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4 lg:gap-10">
            {collection.products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="flexCol mt-20 w-full gap-4">
            <h1 className="heading2">Collections Release</h1>
            <div className="flex flex-wrap justify-center gap-10">
              {collectionsStore.length === 0 ? (
                <p>No collections</p>
              ) : (
                collectionsStore.map((collection: ICollection) => (
                  <CollectionCard
                    collection={collection}
                    key={collection._id}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default CollectionDetails

export const dynamic = "force-dynamic"
