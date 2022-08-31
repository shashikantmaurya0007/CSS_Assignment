import React from "react";
import "../styles/EvenOddPage.css";
const EvenOddPage = () => {
  const evenodd_arr = [
    "Javascript",
    "React",
    "Css",
    "Html",
    "Java",
    "Data Structures and Algorithm",
  ];
  return (
    <ul className="evenodd_container">
      {evenodd_arr.map((skills) => (
        <li className="evenodd_list">{skills}</li>
      ))}
    </ul>
  );
};

export default EvenOddPage;
