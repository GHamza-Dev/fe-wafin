import React from "react";

const Wrapper4XL = ({ children, classes }) => {
  return (
    <div className={`w-10/12 max-w-4xl mx-auto ${classes}`}>{children}</div>
  );
};

export default Wrapper4XL;
