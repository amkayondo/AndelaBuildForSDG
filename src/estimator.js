import userInput from "./dammy data/userInput";
import generateData from "./utils/estimator/generateData";
import generateAppData from "./utils/estimator/generateAppData";

const covid19ImpactEstimator = (userData) => {
  const data = generateData(userData);
  return generateAppData(data);
};

console.log(covid19ImpactEstimator(userInput));

export default covid19ImpactEstimator;
