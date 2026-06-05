import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="/assets/images/kite.png"
        heading="Kite"
        info="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="learn more"
        playStore="/assets/images/googlePlayBadge.svg"
        appStore="/assets/images/appstoreBadge.svg"
      />
      <RightSection
        heading="Console"
        info="The central dashboard for your FinoSphere account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more"
        imgUrl="/assets/images/console.png"
      />

      <LeftSection
        imgUrl="/assets/images/coin.png"
        heading="Coin"
        info="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="learn more"
        playStore="/assets/images/googlePlayBadge.svg"
        appStore="/assets/images/appstoreBadge.svg"
      />
      <RightSection
        heading="Kite Connect API"
        info="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Kite connect"
        imgUrl="/assets/images/kiteconnect.png"
      />

      <LeftSection
        imgUrl="/assets/images/varsity.png"
        heading="Varsity mobile"
        info="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.        "
        tryDemo="Try Demo"
        learnMore="learn more"
        playStore="/assets/images/googlePlayBadge.svg"
        appStore="/assets/images/appstoreBadge.svg"
      />
      <Universe />
    </>
  );
}

export default ProductsPage;
