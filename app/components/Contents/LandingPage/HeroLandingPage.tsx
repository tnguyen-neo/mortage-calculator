import { getLandingPage } from "@/lib/apis/HeroLandingPage.api";
import ContentfulImage from "@/lib/contentful-image";
import { Mail } from "react-feather";

export default async function HeroLandingPage() {
  const iconCards = await getLandingPage();

  return (
    <div
      className="lg:min-h-[720px] lg:h-[720px] flex max-lg:py-8 px-8"
      style={{
        backgroundImage: `url(https:${iconCards.coverImage.url})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1280px] w-full h-full flex mx-auto">
        <div className="w-full flex items-center max-lg:justify-center">
          <div className="max-w-lg w-full flex flex-col justify-center gap-4">
            <span className="text-6xl leading-[5rem] font-bold first-line:text-primary-500">
              {iconCards.title}
            </span>
            <span className="text-2xl">{iconCards.description}</span>
            <div className="relative flex justify-between items-center gap-3 pl-6 px-2 py-1 bg-white rounded-full h-auto">
              <Mail className="w-10 text-gray-400" />
              <input
                className="py-4 w-full focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="btn-primary min-w-max h-full px-4 py-3 rounded-full">
                Get Early Access
              </button>
            </div>
          </div>
        </div>

        <div className="max-lg:hidden relative w-full">
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
