"use client"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { bannerPics } from "@/lib/constants"
import Image from "next/image"
import Container from "../Container"
import { useState } from "react"

const Banner = () => {
  const [loadingImg, setLoadingImg] = useState(false)
  return (
    <Container>
      <section className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 3000 }}
        >
          {bannerPics.map((banner, idx) => (
            <SwiperSlide key={idx} className="flexCenter">
              <div className="flexCenter h-[40vh] w-full flex-col md:h-[50vh] lg:h-[60vh]">
                <div className="flexCenter relative h-[90%] w-full rounded-xl max-md:-translate-y-5">
                  <Image
                    src={banner.url}
                    alt="banner"
                    fill
                        className={`rounded-xl object-center ${loadingImg ? "opacity-100" : "opacity-0"} transition-all duration-500`}
                   onLoad={()=>setLoadingImg(true)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-black/30" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Container>
  )
}

export default Banner
