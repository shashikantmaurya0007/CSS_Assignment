import React, { useEffect, useState } from "react";
import { json } from "../../db";
import { getMonthName } from "../../util";
import "../../styles/FeedBackPageStyles/FeedBackContent.css";
import FeedBackSafetyMeasure from "../FeedBackSafetyMeasure";
const FeedBackContent = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState(null);
  const [safetyMeasures, setSafetyMeasures] = useState([]);
  const [noSafetyMeasures, setNoSafetyMeasures] = useState({});

  useEffect(() => {
    const {
      source,
      destination,
      traveldate,
      safetyMeasures,
      noSafetyMeasures,
    } = json;

    setSource(source);
    setDestination(destination);
    setSafetyMeasures(safetyMeasures);
    setNoSafetyMeasures(noSafetyMeasures);
    setTravelDate(traveldate);
  }, []);

  return (
    <main className="feedbackcontent_container">
      <h3 className="feedbackcontent_title">Help us make travel safer</h3>
      <p>
        Select safety measures followed on your trip from{" "}
        <strong>{source}</strong> to{" "}
        <strong>
          {destination} on{" "}
          {travelDate?.getDate() +
            "th  " +
            getMonthName(travelDate?.getMonth())}
        </strong>
      </p>
      <FeedBackSafetyMeasure
        safetyMeasures={safetyMeasures}
        noSafetyMeasures={noSafetyMeasures}
      />
    </main>
  );
};

export default FeedBackContent;
