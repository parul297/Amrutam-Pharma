import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HolisticApproach = () => {
    const cards = [
        {
            id: 1,
            title: "Make Appointment",
            description: "You must make an appointment in advance, to choose the service and date.",
        },
        {
            id: 2,
            title: "Consultations",
            description: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
        },
        {
            id: 3,
            title: "Treatment Planning",
            description: "The Ayurvedic practitioner creates a personalized treatment plan for you.",
        },
        {
            id: 4,
            title: "Maintenance",
            description: "These visits allow for assessment of progress, adjustments to the treatment.",
        },
    ];

    return (
        <div className="bg-[#fdfdf6] py-16 px-6">
            <div>
                <h2 className="text-center md:text-4xl text-2xl font-extrabold text-[#3A643B] mb-6">
                    <span className="md:border-b-4 border-[#C3D0C4]"> Our Holistic Approach</span>
                </h2>
                <p className="text-center text-gray-700 text-md md:w-3/6 mx-auto mb-10">
                    At Amrutam, we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
                </p>
            </div>
            <div className="container mx-auto">
                <div className="block md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        className="swiper-container"
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div
                                    className="bg-[#FFF7E2] rounded-xl border-t-4 border-[#3A643B] shadow-md text-center flex flex-col items-center justify-center px-5 py-8 mx-auto"
                                    style={{ width: '260px', height: '315px' }}
                                >
                                    <div className="rounded-full bg-[rgba(58,100,59,0.66)] w-16 h-16 flex items-center justify-center mb-4">
                                        <span className="text-white font-bold text-2xl">{card.id}</span>
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-bold text-[#3A643B] text-center">
                                        {card.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-2 text-center">
                                        {card.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="hidden md:grid  grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 ">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-[#FFF7E2] rounded-xl border-t-4 border-[#3A643B] shadow-md text-center flex flex-col xl:w-[290px] xl:h-[315px] lg:h[315px] items-center justify-center px-3 py-8"
                        >
                            <div className="rounded-full bg-[rgba(58,100,59,0.66)] w-16 h-16 flex items-center justify-center mb-4">
                                <span className="text-white font-bold text-2xl">{card.id}</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-[#3A643B] text-center">
                                {card.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-2 text-center md:w-[200px]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HolisticApproach;
