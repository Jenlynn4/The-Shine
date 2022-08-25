let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let dates = date.getDate();
let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let days = day[date.getDay()];
let month = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let months = month[date.getMonth()];
let stamp = document.querySelector("h2");
stamp.innerHTML = `${days} the ${dates}th, of $
  {months} ${hours}: ${minutes} `;
