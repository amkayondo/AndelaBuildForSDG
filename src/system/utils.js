const NumberOfDays = (timeToElapse, periodType) => {
  let days;
  switch (periodType) {
    case "days":
      days = timeToElapse;
      break;
    case "weeks":
      days = timeToElapse * 7;
      break;
    case "months":
      days = timeToElapse * 30;
      break;
    default:
      days = 1;
  }
  return days;
};

export const getNumberOfDays = (timeToElapse, periodType) => {
  const days = NumberOfDays(timeToElapse, periodType);
  return 2 ** Math.floor(days / 3);
};

export const getCurrentlyInfected = (reportedCases, caseType) => {
  if (caseType === "impact") {
    return reportedCases * 10;
  }
  return reportedCases * 50;
};

export const getsevereCasesByRequestedTime = (value) => 0.15 * value;

export const gethospitalBedsByRequestedTime = (totalHospitalBeds, severeCasesByRequestedTime) => {
  const result = 0.35 * totalHospitalBeds - severeCasesByRequestedTime;
  const data = Math.floor(result) + 1;
  // result.toString().split(".");
  return parseInt(data, 10);
};

export const getCasesForICUByRequestedTime = (value) => (5 / 100) * value;
export const getCasesForVentilatorsByRequestedTime = (value) => Math.floor((2 / 100) * value);
export const getDollarsInFlight = (
  infectionsByRequestedTime,
  avgPopulationIncome,
  avgDailyIncome,
  days
) => {
  const result = infectionsByRequestedTime * avgDailyIncome * avgPopulationIncome * days;
  return parseFloat(result.toFixed(1), 10);
};
