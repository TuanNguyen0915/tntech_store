"use client"

import Container from "../Container"
import { getAllCollections } from "@/lib/actions"
import Link from "next/link"
import Image from "next/image"
import { useCollectionsStore } from "@/lib/hook/useCollections"
import { useEffect } from "react"
import { ICollection } from "@/lib/types"
import CollectionCard from "./CollectionCard"

const Collections = async () => {
  const { collectionsStore, setCollectionsStore } = useCollectionsStore()
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllCollections()
      setCollectionsStore(res)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <div className="flexCol w-full gap-4 ">
        <h1 className="heading1">Collections</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {collectionsStore.length === 0 ? (
            <p>No collections</p>
          ) : (
            collectionsStore.map((collection: ICollection) => (
              <CollectionCard collection={collection} key={collection._id}/>
            ))
          )}
        </div>
      </div>
    </Container>
  )
}

export default Collections
