import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import mid from "../assets/images/mid.png";
import a4 from "../assets/images/a4.png";
import a5 from "../assets/images/a5.png";
import a6 from "../assets/images/a6.png";

const AyurvedasMagic = () => {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-center md:text-4xl text-2xl font-extrabold text-green-800 mb-6">
        <span className="md:border-b-4 border-[#C3D0C4]"> Discover Ayurveda’s Magic With Us</span>
      </h2>
      <p className="text-center text-gray-700 text-md md:w-[560px] mx-auto mb-10">
        Ayurvedic treatment aims to balance your body and mind, bringing harmony
        and vitality. It’s like a journey to better health using ancient wisdom,
        a totally effective approach for a better life.
      </p>

      {/* Middle Image for Small Devices */}
      <div className="block lg:hidden w-full mb-10">
        <img src={mid} alt="Meditation" className="mx-auto" />
      </div>

      {/* Grid Layout for Small Devices */}
      <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-6 lg:hidden">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <img src={a1} alt="Personalized Wellness" className="mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Personalized Wellness</h4>
          <p className="text-sm text-gray-600">Get treatments made just for you based on your individual doshas (body type).</p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <img src={a2} alt="Focus on prevention" className="mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Focus on prevention</h4>
          <p className="text-sm text-gray-600">Stop problems even before they start.</p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <img src={a3} alt="Mind-Body Connection" className="mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Mind-Body Connection</h4>
          <p className="text-sm text-gray-600">Keep your mind and body in sync for a happy life.</p>
        </div>
        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center">
          <img src={a4} alt="Holistic Healing" className="mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Holistic Healing</h4>
          <p className="text-sm text-gray-600">Fix the root problem for long-lasting health.</p>
        </div>
        {/* Feature 5 */}
        <div className="flex flex-col items-center text-center">
          <img src={a5} alt="Natural Remedies" className="mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Natural Remedies</h4>
          <p className="text-sm text-gray-600">Using herbs and natural therapies for healing.</p>
        </div>
        {/* Feature 6 */}
        <div className="flex flex-col items-center text-center">
          <img src={a6} alt="Boosting immunity" className="mb-4" />
          <h4 className="text-lg font-semibold text-gray-800">Boosting immunity</h4>
          <p className="text-sm text-gray-600">Stay strong and healthy for life, not just for today.</p>
        </div>
      </div>

      {/* Original Layout for Larger Devices */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-end space-y-10 lg:space-y-10">
          <div className="flex items-center max-w-sm">
            <div className="text-right">
              <h4 className="text-lg font-semibold text-gray-800">Personalized Wellness</h4>
              <p className="text-sm text-gray-600">Get treatments made just for you based on your individual doshas (body type).</p>
            </div>
            <img src={a1} alt="Personalized Wellness" className="ml-4" />
          </div>
          <div className="flex items-center max-w-sm lg:mr-16">
            <div className="text-right">
              <h4 className="text-lg font-semibold text-gray-800">Focus on prevention</h4>
              <p className="text-sm text-gray-600">Stop problems even before they start.</p>
            </div>
            <img src={a2} alt="Focus on prevention" className="ml-4" />
          </div>
          <div className="flex items-center max-w-sm">
            <div className="text-right">
              <h4 className="text-lg font-semibold text-gray-800">Mind-Body Connection</h4>
              <p className="text-sm text-gray-600">Keep your mind and body in sync for a happy life.</p>
            </div>
            <img src={a3} alt="Mind-Body Connection" className="ml-4" />
          </div>
        </div>

        {/* Middle Image */}
        <div className="hidden lg:block w-[500px] h-auto">
          <img src={mid} alt="Meditation" className="mx-auto" />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center lg:items-start space-y-10 lg:space-y-10">
          <div className="flex items-center max-w-sm">
            <img src={a4} alt="Holistic Healing" className="mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Holistic Healing</h4>
              <p className="text-sm text-gray-600">Fix the root problem for long-lasting health.</p>
            </div>
          </div>
          <div className="flex items-center max-w-sm lg:ml-16">
            <img src={a5} alt="Natural Remedies" className="mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Natural Remedies</h4>
              <p className="text-sm text-gray-600">Using herbs and natural therapies for healing.</p>
            </div>
          </div>
          <div className="flex items-center max-w-sm">
            <img src={a6} alt="Boosting immunity" className="mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Boosting immunity</h4>
              <p className="text-sm text-gray-600">Stay strong and healthy for life, not just for today.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedasMagic;
