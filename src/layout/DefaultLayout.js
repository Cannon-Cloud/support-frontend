import React from "react";

import Header from "./partials/Header";
import Footer from "./partials/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="header mb-2">
        <Header />
      </div>
      <main className="main">{children}</main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
