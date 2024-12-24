import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";

const Consultations = () => {
    return (
        <div className="bg-[#F7F8EE] py-16 px-6">
            {/* Title */}
            <h2 className="mx-auto text-center text-2xl md:text-3xl font-bold text-green-800 mb-10">
                <span className="md:border-b-4 border-[#C3D0C4]">
                    What sets Ayurvedic consultations apart?
                </span>
            </h2>

            {/* Grid Layout */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {/* First Card */}
                <div className="bg-white rounded-xl border-t-4 border-green-800 shadow-md text-center flex flex-col justify-center px-6 sm:col-span-1 md:col-span-2">
                    <p className="text-2xl sm:text-3xl font-semibold text-green-800">
                        स्वास्थ्य स्वास्थ्य रक्षणं, <br />
                        आतुरस्य विकार प्रशमनं
                    </p>
                    <p className="text-sm sm:w-[350px] mx-auto text-green-700 mt-3">
                        [ Meaning: The Goal of Ayurveda is to maintain the health of a
                        healthy person and to cure the disease of a diseased person. ]
                    </p>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center sm:col-span-1">
                    <img
                        src={c1}
                        alt="Precise Diagnosis"
                        className="rounded-2xl h-[260px] object-cover w-full max-sm:h-[220px]"
                    />
                </div>

                {/* Third Card */}
                <div className="bg-white rounded-xl border-t-4 border-green-800 shadow-md text-center flex flex-col justify-center px-5 h-[250px] sm:col-span-1">
                    <h4 className="text-lg sm:text-xl font-bold text-green-800 text-start">
                        Precise Diagnosis
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 text-start">
                        Ayurveda’s core principles revolve around Vata, Pitta, and Kapha
                        doshas, guiding you with precise diagnosis and treatment.
                    </p>
                </div>
            </div>

            {/* Bottom Row (4 Cards) */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-xl border-t-4 border-green-800 shadow-md text-center flex flex-col justify-center px-5 h-[250px]">
                    <h4 className="text-lg sm:text-xl font-bold text-green-800 text-start">
                        Zero side-effects
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 text-start">
                        Ayurvedic treatments are devoid of chemicals and are based
                        completely on natural herbs.
                    </p>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center sm:col-span-1">
                    <img
                        src={c2}
                        alt="Natural Remedies"
                        className="w-full rounded-2xl h-[250px] object-cover"
                    />
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl border-t-4 border-green-800 shadow-md text-center flex flex-col justify-center px-5 h-[250px]">
                    <h4 className="text-lg sm:text-xl font-bold text-green-800 text-start">
                        Individual Treatment
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 text-start">
                        All treatments are personalized based on a person&apos;s unique
                        constitution and health concerns.
                    </p>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center sm:col-span-1">
                    <img
                        src={c3}
                        alt="Holistic Approach"
                        className="w-full rounded-2xl h-[250px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Consultations;
