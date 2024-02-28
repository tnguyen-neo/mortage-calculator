import { getLandingPage } from "@/lib/apis/HeroLandingPage.api";
import ContentfulImage from "@/lib/contentful-image";
import { Mail } from "react-feather";

export default async function HeroLandingPage() {
  const iconCards = await getLandingPage();

  return (
    <div className="relative h-auto">
      <ContentfulImage
        src={`https:${iconCards.coverImage.url}`}
        alt=""
        width={iconCards.coverImage.details.image.width}
        height={iconCards.coverImage.details.image.height}
        quality={100}
        className="z-0 w-full object-contain"
      />
      <div
        className="max-w-[1280px] absolute top-0 left-1/2 -translate-x-1/2 z-10 
        w-full h-full flex"
      >
        <div className="w-1/2 flex flex-col justify-center gap-4">
          <span className="text-6xl leading-[5rem] font-bold first-line:text-primary-500">
            {iconCards.title}
          </span>
          <span className="text-2xl">{iconCards.description}</span>
          <div className="relative flex justify-between items-center gap-3 pl-6 p-2 bg-white rounded-full h-auto">
            <Mail className="w-10 text-gray-400" />
            <input
              className="py-4 w-full focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary min-w-max h-full">
              Get early access
            </button>
          </div>
        </div>
        <div className="relative w-1/2">
          <ContentfulImage
            src={`https:${iconCards.contentImage.url}`}
            alt=""
            width={iconCards.contentImage.details.image.width}
            height={iconCards.contentImage.details.image.height}
            quality={100}
            className="absolute bottom-0 z-0 h-5/6 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
