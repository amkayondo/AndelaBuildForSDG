export const severeCasesByRequestedTime = (value) => (15 / 100) * value;

export const hospitalBedsByRequestedTime = (severeCases, totalHospitalBeds) => {
  const avarage = (35 / 100);
  const bedsAvailable = totalHospitalBeds * avarage;
  return Math.round(bedsAvailable - severeCases);
};
