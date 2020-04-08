const generatePeriodType = (timeToElapse) => {
  const hrs = Math.floor(timeToElapse / 60 / 60 / 60);
  return hrs / 24;
};

console.log(generatePeriodType(17254400));

export default generatePeriodType;
