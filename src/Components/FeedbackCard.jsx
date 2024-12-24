import PropTypes from 'prop-types';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const FeedbackCard = ({ review, isActive }) => {
    return (
        <div className="container mx-auto bg-white rounded-xl mt-16 shadow-lg mb-6 md:w-[315px] sm:w-[380px] h-auto sm:h-[371px]">
            {/* Review Header */}
            <div
                className={`mb-2 rounded-t-xl ${isActive ? "bg-[#ECE7FF]" : "bg-[#ECFEE7]"
                    }`}
            >
                <h1 className="font-semibold rounded-t-xl p-4 text-black">{review.header}</h1>
            </div>

            <div className="p-6">
                {/* Customer Info Section */}
                <div className="flex items-center mb-4">
                    {/* Placeholder for customer image */}
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                        <h3 className="font-bold text-black text-lg">{review.customerName}</h3>
                        <p className="text-gray-300">{review.place}</p>
                    </div>
                    <div className="ml-auto">
                        <p className="text-xs text-black">{review.reviewDate}</p>
                    </div>
                </div>

                {/* Rating Section */}
                <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                        <Rating
                            style={{ maxWidth: 130 }}
                            value={review.rating}
                            readOnly
                        />
                    </div>
                </div>

                {/* Review Title */}
                <p className="text-gray-700 text-sm sm:text-base">
                    <i>&apos;</i>{review.reviewTitle}<i>&apos;</i>
                </p>

                {/* Description */}
                <p className="text-gray-600 mt-2 text-xs sm:text-sm text-start md:w-[250px] flex gap-5">{review.description}</p>
            </div>
        </div>
    );
};
FeedbackCard.propTypes = {
    review: PropTypes.shape({
        header: PropTypes.string.isRequired,
        customerName: PropTypes.string.isRequired,
        place: PropTypes.string,
        reviewDate: PropTypes.string,
        rating: PropTypes.number.isRequired,
        reviewTitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default FeedbackCard;
