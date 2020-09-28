import React from "react";
import CardSmall from "./card-small";
import "./overview.css";
const cardSamllList = [
  {
    icon: "images/icon-facebook.svg",
    pageView: "87",
    growth: 3,
  },
  {
    icon: "images/icon-twitter.svg",
    pageView: "52",
    growth: 3,
  },
  {
    icon: "images/icon-instagram.svg",
    pageView: "5462",
    growth: 1307,
  },
  {
    icon: "images/icon-youtube.svg",
    pageView: "114",
    growth: 3,
  },
];
function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSamllList.map(({ icon, pageView, growth }, index) => (
            <CardSmall
              key={index}
              icon={icon}
              pageView={pageView}
              growth={growth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
