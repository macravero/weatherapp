export const tempConverter = (temp) => {
  if (isNaN(parseFloat(temp))) return "invalid temperature";
  return `${Math.round(parseFloat(temp))}`;
};

export const dayParser = (unixDateTime) => {
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(unixDateTime * 1000);
  return weekday[date.getDay()];
};
