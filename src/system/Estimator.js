import {
  getCurrentlyInfected, getInfectionsByRequestedTime,
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
      avgDailyIncomeInUSD, avgDailyIncomePopulation,
      periodType, timeToElapse, reportedCases, totalHospitalBeds
    } = this.data;

    this.generateImpactData = () => {
      const result = {};
      const levelOfIncrease = getNumberOfDays(timeToElapse, periodType);
      result.currentlyInfected = getCurrentlyInfected(reportedCases, "impact");
      result.infectionsByRequestedTime = getInfectionsByRequestedTime(
        result.currentlyInfected * levelOfIncrease
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
      result.infectionsByRequestedTime = getInfectionsByRequestedTime(
        result.currentlyInfected * levelOfIncrease
      );
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
  }
}
