import AyurvedaEssence from "../Components/AyurvedasMagic.jsx";
import ConsultationHighlight from "../Components/ConsultationBanner.jsx";
import Consultations from "../Components/Consultations.jsx";
import HeroBanner from "../Components/HeroBanner.jsx";
import HolisticApproach from "../Components/HolisticApproach.jsx";
import SecondaryBanner from "../Components/SecondaryBanner.jsx";
import Specialists from "../Components/Specialists.jsx";
import UserFeedback from "../Components/UserFeedback.jsx";
import MobileAppShowcase from "../Components/Home.jsx";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <SecondaryBanner />
      <AyurvedaEssence />
      <Consultations />
      <ConsultationHighlight />
      <HolisticApproach />
      <UserFeedback />
      <Specialists />
      <MobileAppShowcase />
    </div>
  );
};

export default Home;
