/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";

export default class UserInputForm extends Component {
  render() {
    return (
            <div>
              <form>
               <div className="frmdiv">
                 <label>
                 population
                  <input type="text"
                data-population="population"
                placeholder="population" className="pop"/></label>

               </div>

               <div className="frmdiv">
                 <label>timeToElapse  <input type="text"
                data-time-to-elapse="timeToElapse"
                placeholder="timeToElapse" className="timelps"/></label>

                </div>

                <div className="frmdiv">
                <label>reportedCases <input type="text"
                data-reported-cases="reportedCases"
                placeholder="reportedCases" className="repcse"/></label>

                </div>

                <div className="frmdiv">
                <label>
                totalHospitalBeds
                 <input type="text"
                data-total-hospital-beds="totalHospitalBeds"
                placeholder="totalHospitalBeds" className="thbeds"/>
                </label>
                </div>

                <div className="frmdiv">
                 <label>periodType
                  <select data-period-type="periodType" className="dfsw">
                  <option>periodType</option>
                  <option>days</option>
                  <option>weeks</option>
                  <option>months</option>
                </select>
                 </label>
                </div>
                <input type="submit"
                data-goestimate="data-goestimate"
                value="estimate" />
              </form>
            </div>
    );
  }
}
