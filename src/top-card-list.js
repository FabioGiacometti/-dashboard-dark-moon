import React from "react";
import Card from "./card";
import "./top-card-list.css";
const cardListData = [
  {
    username: "@MartinColombo",
    followers: "1483",
    todayFollowers: 72,
    icon: "images/icon-facebook.svg",
    name: "facebook",
  },
  {
    username: "@ValeriaVeneciano",
    followers: "1483",
    todayFollowers: 42,
    icon: "images/icon-twitter.svg",
    name: "twitter",
  },
  {
    username: "@MartinColombo",
    followers: "28k",
    todayFollowers: 52,
    icon: "images/icon-instagram.svg",
    name: "instagram",
  },
  {
    username: "@ValeriaVeneciano",
    followers: "12k",
    todayFollowers: -50,
    icon: "images/icon-youtube.svg",
    name: "youtube",
  },
];
function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData, index) => (
            <Card key={index} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default TopCardList;
