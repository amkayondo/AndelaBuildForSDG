import generateData from "./helpers/generateData";

const userInput = {
  name: "Africa",
  avgAge: 19.7,
  avgDailyIncomeInUSD: 5,
  avgDailyIncomePopulation: 0.71,
  periodType: "days",
  timeToElapse: 58,
  reportedCases: 674,
  population: 43422705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (userData) => {
  const data = generateData(userData);
  const result = ({
    data,
    impact: {
      currentlyInfected: data.reportedCases * 10,
      infectionsByRequestedTime: (data.reportedCases * 10) * 512,
      infectionsByRequestedPeriodType: data.periodType
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionsByRequestedTime: (data.reportedCases * 50) * 512
    }
  });
  return result;
};

// console.log(covid19ImpactEstimator(userInput));

export default covid19ImpactEstimator;
