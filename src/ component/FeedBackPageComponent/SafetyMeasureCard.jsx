import React from "react";
import "../../styles/FeedBackPageStyles/FeedbackSafetyMeasureCard.css";
const SafetyMeasureCard = ({
  id,
  img,
  description,
  toggleSafetyMeasure,
  disableSafetyMeasures,
}) => {
  return (
    <div
      className={`feedback_safetymeasure_card ${
        disableSafetyMeasures ? "disabled_component" : ""
      }`}
    >
      <div>
        <img src={img} alt="" />
        <input
          type="checkbox"
          className="safetymeasure_card_checkbox"
          disabled={disableSafetyMeasures}
          onClick={() => toggleSafetyMeasure(id)}
        />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SafetyMeasureCard;
