const getMonthName = (years) => {
  const yearsName = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return yearsName[years - 1];
};

export { getMonthName };
