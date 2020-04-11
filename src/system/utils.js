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
  return 2 ** Math.trunc(days / 3);
};

export const getCurrentlyInfected = (reportedCases, caseType) => {
  if (caseType === "impact") {
    return reportedCases * 10;
  }
  return reportedCases * 50;
};

export const getsevereCasesByRequestedTime = (value) => Math.trunc(0.15 * value);

export const gethospitalBedsByRequestedTime = (totalHospitalBeds, severeCasesByRequestedTime) => {
  const result = 0.35 * totalHospitalBeds - severeCasesByRequestedTime;
  return Math.trunc(result);
};

export const getCasesForICUByRequestedTime = (value) => Math.trunc((5 / 100) * value);

export const getCasesForVentilatorsByRequestedTime = (value) => {
  const result = Math.trunc((2 / 100) * value);
  return result;
};

export const getDollarsInFlight = (
  infectionsByRequestedTime,
  avgPopulationIncome,
  avgDailyIncome,
  days
) => {
  const result = (infectionsByRequestedTime * avgDailyIncome * avgPopulationIncome) / days;
  return Math.trunc(result);
};
