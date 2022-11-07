import React from "react";
import foodVideo from "./food.mp4";
import "./details.css";

const Details = () => {
  return (
    <section className="video">
      <div className="video-details">
        <p>
          In many cases, fresh products are rejected by large supermarket chains
          if they do not meet certain quality standards such as shape, size and
          appearance, regardless of their suitability for human consumption. In
          addition, many retail chains discard products before their expiring
          dates claiming that the products either are unsellable or generate
          negative image to the retailer. Consumer’s attitudes and the
          consumption culture also play their part as they reject food that is
          in good condition but with “not-so-good” appearance. Foods that have
          reached households are also wasted because they turn unsuitable for
          human consumption. Restaurants and hotels are other stakeholders
          within the food waste, because of the large portions served to
          customers. Since not all the portion is consumed, the rest will end up
          in the garbage bin. The role of the local governments in setting up
          and running food banks is controversial. On one hand, food banks are
          seen as a failure of the society for providing food to those in need.
          As such, food banks sponsored or run by local governments are
          considered as a multi-millionaire business of poverty perpetuation
          funded by taxpayers (Belger, 2014).
        </p>
      </div>
      <div className="video-section">
        <video controls>
          <source src={foodVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Details;
