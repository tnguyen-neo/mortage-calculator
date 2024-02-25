import React from "react"
import InstaCard from "@/public/images/insta-card.svg"
import ContentfulImage from "@/lib/contentful-image"
import '@/styles/scss/button.scss'

export default function Header() {
  return (
    <header className="mx-auto xl:max-w-[1280px] h-24 px-5 py-1 flex items-center">
      <div className="flex-grow">
        <ContentfulImage
          alt={"InstaCard"}
          height={30}
          src={InstaCard}
        />
      </div>

      <div className="flex flex-grow gap-4 items-center justify-center">
        <span className="font-semibold">Ready to change?</span>
        <button className="btn btn-primary">Insta Benefit</button>
        <button className="btn btn-secondary">Insta Benefit</button>
      </div>
    </header>
  )
}
