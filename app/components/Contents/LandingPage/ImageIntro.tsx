import appStore from "@/public/images/app-store-black.png";
import googlePlay from "@/public/images/google-play-black.png";

import { getImageIntro } from "@/lib/apis/ImageIntro.api";
import ContentfulImage from "@/lib/contentful-image";

export default async function ImageIntro() {
  const imageIntro = await getImageIntro();
  return (
    <div className="relative h-auto">
      <ContentfulImage
        src={`https:${imageIntro.image.url}`}
        alt=""
        width={imageIntro.image.details.image.width}
        height={imageIntro.image.details.image.height}
        quality={100}
        className="z-0 w-full object-contain"
      />
      <div
        className="max-w-[1280px] absolute top-0 left-1/2 -translate-x-1/2 z-10 
        w-full h-full flex"
      >
        <div className="w-1/2 flex flex-col justify-center gap-4">
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
