
const generateData = (data) => {
  const {
    name,
    avgAge,
    avgDailyIncomeInUSD,
    avgDailyIncomePopulation,
    timeToElapse,
    reportedCases,
    population,
    periodType,
    totalHospitalBeds
  } = data;
  return ({
    data: {
      region: {
        name,
        avgAge,
        avgDailyIncomeInUSD,
        avgDailyIncomePopulation
      },
      periodType,
      timeToElapse,
      reportedCases,
      population,
      totalHospitalBeds
    }
  });
};

export default generateData;
