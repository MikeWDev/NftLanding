import React from "react";
import icon from "../Assets/icon.png";
import super1 from "../Assets/super1.png";
import release2 from "../Assets/release2.png";
import Card from "./Card";
const FreeNft = () => {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>

          <div className="content">
            <div className="image">
              <img src={icon} alt="icon" />
            </div>
            <h2 className="title">Free NFT for early birds</h2>
            <p className="description">
              Sign up today you will get a free NFT when we launch
            </p>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series={"Floop Series"}
            title="Purple man"
            price={2.99}
            tag={12985}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series={"Gloop Series"}
            title="Purple man"
            price={3.95}
            tag={12985}
            time={2}
          />
        </div>
      </div>
    </div>
  );
};

export default FreeNft;
