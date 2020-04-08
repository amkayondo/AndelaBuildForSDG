import generateData from "./helpers/generateData";
import userInput from "./dammy data/userInput";

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

console.log(covid19ImpactEstimator(userInput));

export default covid19ImpactEstimator;
