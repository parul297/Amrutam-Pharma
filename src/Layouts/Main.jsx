import { Outlet } from "react-router-dom";
import TopNavigation from "../Components/TopNavigation";
import PageFooter from "../Components/PageFooter";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <TopNavigation />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <PageFooter />
    </div>
  );
};

export default Main;
