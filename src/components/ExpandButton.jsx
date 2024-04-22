import { useState } from "react";

export const ExpandButton = () => {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <button type="button" className="expand-btn" onClick={handleExpand}>
      <span className="expand-btn__title">
        {isExpand === true ? "Less" : "More"}
      </span>
      {/* <div className="expand-btn--arrow">
        <i className="fa-solid fa-chevron-down"></i>
      </div> */}
    </button>
  );
};
