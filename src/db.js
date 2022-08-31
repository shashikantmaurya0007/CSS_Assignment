const json = {
  source: "Chennai",
  destination: "Bangalore",
  traveldate: new Date(),
  safetyMeasures: [
    {
      id: 123,
      img: `https://st.redbus.in/Images/safety/landing/measures/thermal_checking.png`,
      description:
        "Temperature check done for passengers before boarding the bus",
    },
    {
      id: 124,
      img: `https://s3.rdbuz.com/Images/safety/landing/measures/temperaturechecks.png`,
      description: "Frequent temperature checkups were done?",
    },
    {
      id: 132,
      img: `https://s3.rdbuz.com/Images/safety/landing/measures/temperaturechecks.png`,
      description: "social distancing was followed while boarding the bus?",
    },
    {
      id: 125,
      img: `https://st.redbus.in/Images/safety/landing/measures/thermal_checking.png`,
      description:
        "Was social distancing maintained in the bus throughout the journey?",
    },
    {
      id: 126,
      img: `https://st.redbus.in/Images/safety/landing/measures/thermal_checking.png`,
      description:
        "were the hygiene and safety standards observed at the rest stop?",
    },
    {
      id: 127,
      img: `https://s3.rdbuz.com/Images/safety/landing/measures/temperaturechecks.png`,
      description:
        "Did the bus stop at non-scheduled boarding point to pick passengers?",
    },
  ],
  noSafetyMeasures: {
    id: 128,
    img: `https://s3.rdbuz.com/Images/safety/home/homesafety.png`,
    description: `No safety measures followed?`,
  },
};

export { json };
