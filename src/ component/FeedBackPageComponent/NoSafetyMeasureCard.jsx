import React from "react";
import "../../styles/FeedBackPageStyles/FeedbackSafetyMeasureCard.css";
const NoSafetyMeasureCard = ({
  img,
  description,
  toggleNoSafetyMeasures,
  disableNoSafetyMeasures,
}) => {
  return (
    <div
      className={`feedback_safetymeasure_card ${
        disableNoSafetyMeasures ? "disabled_component" : ""
      }`}
    >
      <div>
        <img src={img} alt="" />
        <input
          onClick={() => toggleNoSafetyMeasures()}
          type="checkbox"
          disabled={disableNoSafetyMeasures}
          className="safetymeasure_card_checkbox"
        />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default NoSafetyMeasureCard;
