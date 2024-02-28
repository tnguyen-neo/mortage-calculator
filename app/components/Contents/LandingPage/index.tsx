import AnimatedPhone from "./AnimatedPhone";
import HeroLandingPage from "./HeroLandingPage";
import IconCardContainer from "./IconCard";
import ImageIntro from "./ImageIntro";
import MortgageCalculator from "./MortgageCalculator";

export default function LandingPage() {
  return (
    <div className="mx-auto px-5 flex flex-col gap-4">
      <HeroLandingPage />
      <ImageIntro />
      <div className="max-w-[1280px] w-auto mx-auto flex flex-col gap-4">
        <AnimatedPhone />
        <IconCardContainer />
        <MortgageCalculator />
      </div>
    </div>
  );
}
