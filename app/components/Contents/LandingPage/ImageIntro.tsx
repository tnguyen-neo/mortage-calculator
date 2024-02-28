import appStore from "@/public/images/app-store-black.png";
import googlePlay from "@/public/images/google-play-black.png";

import { getImageIntro } from "@/lib/apis/ImageIntro.api";
import ContentfulImage from "@/lib/contentful-image";

export default async function ImageIntro() {
  const imageIntro = await getImageIntro();
  return (
    <div
      className="lg:min-h-[680px] lg:h-[680px] flex max-lg:py-8 px-8"
      style={{
        backgroundImage: `url(https:${imageIntro.image.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1280px] w-full h-full flex">
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center gap-4">
          <span className="text-3xl font-medium text-primary-500">
            THE BENEFIT WE HAVE
          </span>
          <span className="text-5xl leading-[4rem] font-bold">
            {imageIntro.title}
          </span>
          <div className="flex gap-4 pt-4">
            <a href={imageIntro.appStoreLink}>
              <ContentfulImage
                src={appStore.src}
                alt="App Store"
                width={appStore.width}
                height={appStore.height}
                quality={100}
                className="cursor-pointer hover:shadow-lg"
              />
            </a>
            <a href={imageIntro.googlePlayLink}>
              <ContentfulImage
                src={googlePlay.src}
                alt="Google Play"
                width={googlePlay.width}
                height={googlePlay.height}
                quality={100}
                className="cursor-pointer hover:shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
