import { SlMenu } from "react-icons/sl";
import logo from "../assets/images/logo.png";

const TopNavigation = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#FFF7E2" }}
        className="bg-opacity-75 h-[93px] top-0 z-50 shadow-bottom-shadow w-full"
      >
        <div className="navbar bg-transparent flex items-center justify-between px-6 relative">
          <div className="navbar-start md:hidden">
            <SlMenu
              size={30}
              className="text-xl lg:text-2xl text-green-700 font-bold cursor-pointer"
            />
          </div>
          <div className="absolute inset-x-0 mx-auto flex justify-center md:hidden">
            <img src={logo} alt="Logo" className="max-h-12" />
          </div>
          <div className="navbar-end hidden md:flex"></div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;




