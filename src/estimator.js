import EstimatorApp from "./system/Estimator";

const covid19ImpactEstimator = (userData) => {
  const data = userData;
  const Estimator = new EstimatorApp(data);
  const { generateImpactData, generateServeData } = Estimator;
  return {
    data,
    estimate: {
      impact: generateImpactData(),
      severeImpact: generateServeData()
    }
  };
};

export default covid19ImpactEstimator;
