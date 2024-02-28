import AnimatedPhone from "./AnimatedPhone";
import HeroLandingPage from "./HeroLandingPage";
import IconCardContainer from "./IconCard";
import ImageIntro from "./ImageIntro";
import MortgageCalculator from "./MortgageCalculator";

export default function LandingPage() {
  return (
    <div className="mx-auto px-5 grid gap-4">
      <HeroLandingPage />
      <ImageIntro />
      <div className="max-w-[1280px] mx-auto grid gap-4">
        <AnimatedPhone />
        <div className="flex justify-center py-10">
          <IconCardContainer />
        </div>
        <MortgageCalculator />
      </div>
    </div>
  );
}
