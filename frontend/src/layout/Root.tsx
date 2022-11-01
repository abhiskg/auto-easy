import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
