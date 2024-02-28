import InstaCard from "@/public/images/insta-card.svg";
import ContentfulImage from "@/lib/contentful-image";
import "@/styles/scss/button.scss";

export default function Header() {
  return (
    <header className="mx-auto max-w-[1280px] h-24 px-5 py-1 flex items-center justify-between">
      <ContentfulImage alt={"InstaCard"} height={30} src={InstaCard} priority />

      <div className="flex gap-4 items-center">
        <span className="font-semibold">Ready to change?</span>
        <button className="btn btn-secondary">Insta Benefit</button>
      </div>
    </header>
  );
}
