import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const BackDrop = ({ children, centerChild, onBackDropClick, show }) => {
  const [opened, setBackDropOpened] = useState(false);

  useEffect(() => {
    setBackDropOpened((prevState) => show);
  }, [show]);

  const backDropClickHandler = (e) => {
    if (e.target.dataset?.backdrop) {
      onBackDropClick();
    }
  };

  return opened ? (
    <div
      data-backdrop={true}
      onClick={backDropClickHandler}
      className={`fixed inset-0 bg-gray-500 bg-opacity-75 z-40 ${
        centerChild && "flex items-center justify-center"
      }`}
    >
      {children}
    </div>
  ) : null;
};

BackDrop.prototype = {
  centerChild: PropTypes.bool,
};

BackDrop.defaultProps = {
  centerChild: true,
};
export default BackDrop;
