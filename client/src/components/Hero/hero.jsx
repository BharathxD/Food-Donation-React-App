import React from "react";
import Payment from "../Payment/payment";
import FoodDonation from "./food-donation.jpeg";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img src={FoodDonation} alt="donation"/>
      <div className="hero-container">
        <h1 className="hero-header">You can help beat hunger!</h1>
        <p className="hero-context">
          Each year about 1.3 billion tons of food are wasted and at the same
          time about 800 million people do not have access to sufficient and
          nutritious food (Global FoodBanking Network, 2014b). This figure
          represents roughly one third of food produced for human consumption.
          Food can be either lost or wasted throughout the supply chain, from
          initial agricultural production down to final household consumption
          The difference between losses and waste lies in the supply chain stage
          where food is no longer usable for human consumption. Loss occurs when
          food does not reach the final consumer due to improper handling,
          packing and storage. Such foods are not suitable for human consumption
          and only have a marginal value to be transformed as low cost
          fertilizers and fuel. Waste occurs when the product that reached the
          final marketplace is not consumed due to improper consumer behavior,
          bad storage practices as well as to the lack of coordination between
          different stakeholders in the supply chain.
        </p>
          <div className="hero-Btn">
          {/* Including Payment/Donation Button to the hero section of the page */}
            <Payment />
          </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
