function timeConversion(s) {
  let response = "";
  const hourFormat = s.slice(8);
  const restTime = s.slice(2, 8);
  const getHour = s.slice(0, 2);

  if (hourFormat === "PM") {
    const sumTime = Number(getHour) + 12;
    response = `${String(sumTime)}${restTime}`;
  }

  if (hourFormat === "AM") {
    response = s.slice(0, 8);
  }

  if (getHour === "12" && hourFormat === "AM") {
    response = `00${restTime}`;
  }

  if (getHour === "12" && hourFormat === "PM") {
    response = s.slice(0, 8);
  }
  return response;
}

const hoursForTest = "01:00:00AM";

console.log(timeConversion(hoursForTest));
