import InstaCard from "@/public/images/insta-card.svg";
import ContentfulImage from "@/lib/contentful-image";
import "@/styles/scss/button.scss";

export default function Header() {
  return (
    <header
      className="mx-auto max-w-[1280px] h-auto md:h-24 px-5 py-1 
        flex max-md:flex-col gap-4 items-center max-md:justify-center justify-between"
    >
      <ContentfulImage alt={"InstaCard"} height={30} src={InstaCard} priority />

      <div className="flex max-sm:flex-col gap-4 items-center justify-center">
        <span className="font-semibold">Ready to change?</span>
        <button className="btn btn-secondary">Insta Benefit</button>
      </div>
    </header>
  );
}
