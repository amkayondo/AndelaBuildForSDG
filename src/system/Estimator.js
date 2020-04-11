import { getCurrentlyInfected, normalizeDays, gethospitalBedsByRequestedTime } from "./utils";

export default class Estimator {
  constructor(data) {
    this.data = data;
    const {
      periodType, timeToElapse, reportedCases, totalHospitalBeds,
      region
    } = this.data;
    const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;
    const days = normalizeDays(periodType, timeToElapse);
    const factor = Math.trunc(days / 3);
    this.generateImpactData = () => {
      const result = {};
      result.currentlyInfected = getCurrentlyInfected(
        reportedCases, "impact"
      );
      result.infectionsByRequestedTime = result.currentlyInfected
                                         * (2 ** factor);
      result.severeCasesByRequestedTime = Math.trunc(0.15
                                        * result.infectionsByRequestedTime);
      result.hospitalBedsByRequestedTime = gethospitalBedsByRequestedTime(
        totalHospitalBeds, result.severeCasesByRequestedTime
      );
      result.casesForICUByRequestedTime = Math.trunc(0.05
                                        * result.infectionsByRequestedTime);
      result.casesForVentilatorsByRequestedTime = Math.trunc(0.02
                                        * result.infectionsByRequestedTime);
      result.dollarsInFlight = Math.trunc((
        result.infectionsByRequestedTime
        * avgDailyIncomePopulation * avgDailyIncomeInUSD
      ) * days);
      return result;
    };

    this.generateServeData = () => {
      const result = {};
      result.currentlyInfected = getCurrentlyInfected(
        reportedCases, "severe"
      );
      result.infectionsByRequestedTime = result.currentlyInfected * (2 ** factor);
      result.severeCasesByRequestedTime = Math.trunc(0.15
                                          * result.infectionsByRequestedTime);
      result.hospitalBedsByRequestedTime = gethospitalBedsByRequestedTime(
        totalHospitalBeds, result.severeCasesByRequestedTime
      );
      result.casesForICUByRequestedTime = Math.trunc(0.05
                                          * result.infectionsByRequestedTime);
      result.casesForVentilatorsByRequestedTime = Math.trunc(0.02
                                        * result.infectionsByRequestedTime);
      result.dollarsInFlight = Math.trunc((
        result.infectionsByRequestedTime
        * avgDailyIncomePopulation * avgDailyIncomeInUSD
      ) * days);
      return result;
    };
  }
}
