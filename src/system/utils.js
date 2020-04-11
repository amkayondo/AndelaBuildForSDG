/* eslint-disable no-param-reassign */
export const normalizeDays = (periodType, period) => {
  if (periodType === "weeks") {
    period *= 7;
  }
  if (periodType === "months") {
    period *= 30;
  }
  return period;
};

export const getCurrentlyInfected = (reportedCases, impactType) => {
  if (impactType === "impact") {
    const impactResult = reportedCases * 10;
    return Math.trunc(impactResult);
  }
  return Math.trunc(reportedCases * 50);
};

export const gethospitalBedsByRequestedTime = (
  totalHospitalBeds, severeCasesByRequestedTime
) => {
  const bedAvailable = (0.35 * totalHospitalBeds);
  return Math.trunc(bedAvailable - severeCasesByRequestedTime);
};
