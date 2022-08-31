import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../styles/FeedBackPageStyles/feedbackHeader.css";
import { useNavigate } from "react-router-dom";
const FeedBackHeader = () => {
  const navigate = useNavigate();

  const navigateToPreviousPage = () => navigate(-1);

  return (
    <header className="feedbackheader_container">
      <ArrowBackIcon onClick={() => navigateToPreviousPage()} />
      <h3>safety+feedback</h3>
    </header>
  );
};

export default React.memo(FeedBackHeader);
