import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const PageFooter = () => {
    return (
        <div>
            <div className="bg-[#E7EFE9] py-8 mx-sm:hidden flex flex-col justify-center max-sm:hidden">
                <div className="container mx-auto text-center flex justify-center mt-20 mb-32 lg:text-left">
                    <div className="text-[#3A643B] ">
                        <h3 className="font-bold text-lg mb-4">Information</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm text-gray-700 hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-700 hover:underline">
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-700 hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-700 hover:underline">
                                    Privacy Policy for Mobile Apps
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-700 hover:underline">
                                    Shipping and Returns Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-700 hover:underline">
                                    International Delivery
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-700 hover:underline">
                                    For Businesses, Hotels and Resorts
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-[#E7EFE9] py-8 px-6 lg:hidden md:hidden">
                    <div className="text-black text-sm">
                        <h3 className="font-bold  text-[#3A643B] text-lg mb-2">Get in touch</h3>
                        <p className="mb-2">support@amrutam.co.in</p>
                        <p className="mb-2">
                            Amrutam Pharmaceuticals Pvt Ltd., <br />
                            chitragupt ganj, Nai Sadak, Lashkar, <br />
                            Gwalior - 474001
                        </p>
                        <p className="mb-4">+91 9713171999</p>
                        <div className="flex gap-2 mb-6">
                            <div className="bg-[#3A643B] rounded-full p-2">
                                <FaFacebookF className="text-white w-6 h-6 cursor-pointer" />
                            </div>
                            <div className="bg-[#3A643B] rounded-full p-2">
                                <FaInstagram className="text-white w-6 h-6 cursor-pointer" />
                            </div>
                            <div className="bg-[#3A643B] rounded-full p-2">
                                <FaYoutube className="text-white w-6 h-6 cursor-pointer" />
                            </div>
                            <div className="bg-[#3A643B] rounded-full p-2">
                                <FaTwitter className="text-white w-6 h-6 cursor-pointer" />
                            </div>
                            <div className="bg-[#3A643B] rounded-full p-2">
                                <FaLinkedinIn className="text-white w-6 h-6 cursor-pointer" />
                            </div>
                            <div className="bg-[#3A643B] rounded-full p-2">
                                <FaPinterestP className="text-white w-6 h-6 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="text-[#3A643B] text-sm mb-6">
                        <h3 className="font-bold text-lg mb-2">Information</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-700 hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:underline">
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:underline">
                                    Privacy Policy for Mobile Apps
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:underline">
                                    Shipping and Returns Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:underline">
                                    International Delivery
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:underline">
                                    For Businesses, Hotels and Resorts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-[#3A643B] text-sm">
                        <h3 className="font-bold text-sm mb-2">
                            Subscribe to our Newsletter and join <br /> Amrutam Family today!
                        </h3>
                        <div className="mt-5">
                            <div className="join">
                                <input className="input input-bordered join-item w-48 rounded-full bg-transparent border border-black" placeholder="Your Email Address" />
                                <button className="btn join-item rounded-full bg-black text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageFooter;
