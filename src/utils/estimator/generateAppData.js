import currentlyInfected from "./currentlyInfected";
import infectionsByRequestedTime from "../../helpers/estimator/getInfectionsByRequestedTime";
import { severeCasesByRequestedTime, hospitalBedsByRequestedTime } from "../../helpers/estimator/estimatorValues";

const generateAppData = (appData) => {
  const {
    data
  } = appData;
  const impactCurrentlyInfected = currentlyInfected(data.reportedCases, 10);
  const severeCurrentlyInfected = currentlyInfected(data.reportedCases, 50);
  return ({
    data,
    impact: {
      currentlyInfected: impactCurrentlyInfected,
      infectionsByRequestedTime:
                    infectionsByRequestedTime(impactCurrentlyInfected)
    },
    severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime:
                    infectionsByRequestedTime(severeCurrentlyInfected),
      severeCasesByRequestedTime:
                severeCasesByRequestedTime(infectionsByRequestedTime(severeCurrentlyInfected)),
      hospitalBedsByRequestedTime: hospitalBedsByRequestedTime(
        severeCasesByRequestedTime(infectionsByRequestedTime(severeCurrentlyInfected)),
        data.totalHospitalBeds
      )
    }
  });
};

export default generateAppData;
