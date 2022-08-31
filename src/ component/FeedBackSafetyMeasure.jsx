import React, { useState } from "react";
import SafetyMeasureCard from "./FeedBackPageComponent/SafetyMeasureCard";
import "../styles/FeedBackPageStyles/FeedBackSafetyMeasure.css";
import NoSafetyMeasureCard from "./FeedBackPageComponent/NoSafetyMeasureCard";
import { useNavigate } from "react-router-dom";
const FeedBackSafetyMeasure = ({ safetyMeasures, noSafetyMeasures }) => {
  const [safetyMeasuresSelected, setSafetyMeasureSelected] = useState([]);
  const [disableSafetyMeasures, setDisableSafetyMeasures] = useState(false);
  const [disableNoSafetyMeasures, setDisableNoSafetyMeasures] = useState(false);
  const navigagte = useNavigate();

  const navigateToThankYouPage = () => navigagte("/thankyou");

  const disableButton = () => {
    return !disableSafetyMeasures && !disableNoSafetyMeasures;
  };

  const toggleSafetyMeasure = (id) => {
    if (safetyMeasuresSelected.includes(id)) {
      const arr = safetyMeasuresSelected.filter((id_) => id_ !== id);
      setSafetyMeasureSelected(arr);
      arr.length === 0 && setDisableNoSafetyMeasures(false);
    } else {
      setSafetyMeasureSelected([...safetyMeasuresSelected, id]);
      setDisableNoSafetyMeasures(true);
    }
  };

  const toggleNoSafetyMeasures = () =>
    setDisableSafetyMeasures((prev) => !prev);
  console.log(disableNoSafetyMeasures);

  return (
    <>
      <section className="feedbacksafetymeasure_container">
        {safetyMeasures.map(({ id, img, description }) => (
          <SafetyMeasureCard
            key={id}
            id={id}
            img={img}
            description={description}
            disableSafetyMeasures={disableSafetyMeasures}
            toggleSafetyMeasure={toggleSafetyMeasure}
          />
        ))}
        <NoSafetyMeasureCard
          key={noSafetyMeasures.id}
          img={noSafetyMeasures.img}
          description={noSafetyMeasures.description}
          toggleNoSafetyMeasures={toggleNoSafetyMeasures}
          disableNoSafetyMeasures={disableNoSafetyMeasures}
        />
      </section>
      <button
        disabled={disableButton()}
        onClick={() => navigateToThankYouPage()}
        className={`feedback_submit_button ${
          disableButton() ? "disabled_component" : ""
        } `}
      >
        DONE
      </button>
    </>
  );
};

export default FeedBackSafetyMeasure;
