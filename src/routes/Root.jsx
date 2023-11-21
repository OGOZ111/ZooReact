import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
