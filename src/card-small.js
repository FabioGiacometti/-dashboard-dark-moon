import React from "react";
import "./card-small.css";
function CardSmall({ icon, pageView, growth }) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={icon} alt="" />
      </p>
      <p className="card-small-number">{pageView}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt="" />
          {growth}%
        </span>
      </p>
    </div>
  );
}

export default CardSmall;
