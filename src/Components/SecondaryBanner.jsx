import frame1 from "../assets/images/Frame 1.png";
import frame2 from "../assets/images/Frame 2.png";
import frame3 from "../assets/images/Frame 3.png";
import frame4 from "../assets/images/Frame 4.png";

const SecondaryBanner = () => {
  return (
    <div className="flex flex-wrap justify-between items-center bg-[#f9f5e7] p-5 gap-5">
      <div className="container mx-auto md:border-x-2 max-sm:border-y-2 border-orange-100 flex items-center md:max-w-[300px]">
        <img src={frame1} alt="Convenient Consultations" className="mr-4" />
        <p className="text-sm text-gray-700 leading-relaxed">
          Convenient Online & In-Clinic Consultations
        </p>
      </div>
      <div className="container mx-auto md:border-x-2 max-sm:border-y-2 border-orange-100 flex items-center md:max-w-[300px]">
        <img src={frame2} alt="Safe Treatment" className="mr-4" />
        <p className="text-sm text-gray-700 leading-relaxed">
          Safe And Effective Treatment
        </p>
      </div>
      <div className="container mx-auto md:border-x-2 max-sm:border-y-2 border-orange-100 flex items-center md:max-w-[300px]">
        <img src={frame3} alt="Experienced Practitioners" className="mr-4" />
        <p className="text-sm text-gray-700 leading-relaxed">
          Experienced Ayurvedic Practitioners
        </p>
      </div>
      <div className="container mx-auto md:border-x-2 max-sm:border-y-2 border-orange-100 flex items-center md:max-w-[300px]">
        <img src={frame4} alt="Personalized Plans" className="mr-4" />
        <p className="text-sm text-gray-700 leading-relaxed">
          Personalized Treatment Plans & Guidance
        </p>
      </div>
    </div>
  );
};

export default SecondaryBanner;
