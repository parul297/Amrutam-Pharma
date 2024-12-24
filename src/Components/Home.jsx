import mobile from "../assets/images/mobile.png";

const Home = () => {
  return (
    <div className="bg-[#FFF5E4] py-16 px-6 sm:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">
      <div className="flex container mx-auto justify-evenly flex-col lg:flex-row items-center lg:items-start">
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-[#3A643B] text-2xl sm:text-4xl font-bold mb-4">
            Amrutam Home App
          </h2>
          <p className="text-gray-700 mb-6">
            The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant
            characteristics of our website, this app offers a wide range of additional features.
          </p>
          <div className="lg:hidden mt-8 mb-8">
            <img src={mobile} alt="Mobile App" className="mx-auto w-full" />
          </div>
          <p className="text-gray-800 font-semibold text-lg mb-6">
            Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
          </p>
          <p className="text-black text-xl font-bold mb-4">Get The App Now</p>
          <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center lg:justify-start">
            <a href="#" className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-[150px] h-[50px] object-contain"
              />
            </a>
            <a href="#" className="block">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-[150px] h-[50px] object-contain"
              />
            </a>
          </div>
        </div>
        <div className="relative mt-10 lg:mt-0 lg:ml-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg order-first lg:order-last max-sm:hidden">
          <img src={mobile} alt="Mobile App" className="mx-auto w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
