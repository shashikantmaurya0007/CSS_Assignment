import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingPage.css";
const LandingPage = () => {
  const projects = [
    { id: 1, projectname: "FeedBack Project", redirect: "/feedback" },
    { id: 2, projectname: "Even Odd Project", redirect: "/evenodd" },
    { id: 3, projectname: "GridCard Project", redirect: "/feedback" },
  ];
  const navigate = useNavigate();

  const naigateToIndividualProject = (redirect) => navigate(redirect);
  return (
    <section className="landingpage_container">
      {projects.map(({ id, projectname, redirect }) => (
        <section
          className="landingpage_project_card"
          key={id}
          onClick={() => naigateToIndividualProject(redirect)}
        >
          <h1>{projectname}</h1>
        </section>
      ))}
    </section>
  );
};

export default LandingPage;
