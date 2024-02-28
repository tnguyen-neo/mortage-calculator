import iphone13 from "@/public/images/group-iphone-13-pro.png";

import ContentfulImage from "@/lib/contentful-image";
import TextBubble from "../../Partials/textBubble";

export default async function AnimatedPhone() {
  return (
    <div className="relative h-auto flex justify-center">
      <ContentfulImage
        src={iphone13.src}
        alt="Iphone 13 pro"
        width={iphone13.width}
        height={iphone13.height}
        quality={100}
        className="z-0 h-full object-contain"
      />
      <TextBubble className="absolute left-0 top-0 rounded-br-none">
        Easy way for users to create and share their business cards on the digital platform
      </TextBubble>
      <TextBubble className="absolute right-0 bottom-1/4 rounded-tl-none">
        Allow users to share links to social media channels like: Facebook, Instagram, ...
      </TextBubble>
    </div>
  );
}
