import {
  getCurrentlyInfected,
  getNumberOfDays,
  getsevereCasesByRequestedTime,
  gethospitalBedsByRequestedTime,
  getCasesForICUByRequestedTime,
  getCasesForVentilatorsByRequestedTime,
  getDollarsInFlight
} from "./utils";

export default class Estimator {
  constructor(data) {
    this.data = data;
    const {
      periodType, timeToElapse, reportedCases, totalHospitalBeds,
      region
    } = this.data;
    const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;
    this.generateImpactData = () => {
      const result = {};
      const levelOfIncrease = getNumberOfDays(timeToElapse, periodType);
      result.currentlyInfected = getCurrentlyInfected(reportedCases, "impact");
      result.infectionsByRequestedTime = result.currentlyInfected * levelOfIncrease;
      result.severeCasesByRequestedTime = getsevereCasesByRequestedTime(
        result.infectionsByRequestedTime
      );
      result.hospitalBedsByRequestedTime = gethospitalBedsByRequestedTime(
        totalHospitalBeds, result.severeCasesByRequestedTime
      );
      result.casesForICUByRequestedTime = getCasesForICUByRequestedTime(
        result.infectionsByRequestedTime
      );
      result.casesForVentilatorsByRequestedTime = getCasesForVentilatorsByRequestedTime(
        result.infectionsByRequestedTime
      );
      result.dollarsInFlight = getDollarsInFlight(
        result.infectionsByRequestedTime,
        avgDailyIncomePopulation,
        avgDailyIncomeInUSD,
        levelOfIncrease
      );
      return result;
    };

    this.generateServeData = () => {
      const result = {};
      const levelOfIncrease = getNumberOfDays(timeToElapse, periodType);
      result.currentlyInfected = getCurrentlyInfected(reportedCases, "servere");
      result.infectionsByRequestedTime = result.currentlyInfected * levelOfIncrease;
      result.severeCasesByRequestedTime = getsevereCasesByRequestedTime(
        result.infectionsByRequestedTime
      );
      result.hospitalBedsByRequestedTime = gethospitalBedsByRequestedTime(
        totalHospitalBeds, result.severeCasesByRequestedTime
      );
      result.casesForICUByRequestedTime = getCasesForICUByRequestedTime(
        result.infectionsByRequestedTime
      );
      result.casesForVentilatorsByRequestedTime = getCasesForVentilatorsByRequestedTime(
        result.infectionsByRequestedTime
      );
      const days = getNumberOfDays(timeToElapse, periodType);
      result.dollarsInFlight = getDollarsInFlight(
        result.infectionsByRequestedTime,
        avgDailyIncomePopulation,
        avgDailyIncomeInUSD,
        days
      );
      return result;
    };
  }
}
