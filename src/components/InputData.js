/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";

export default class InputData extends Component {
  render() {
    return (
          <div class="div-form_inner">
            <div class="div-input">
              <label for="population" class="div-input__label">Population</label>
              <input type="number" id="population" data-population
              autocomplete="off"
              class="div-input__input"/>
            </div>
            <div class="div-input">
              <label for="timeToElapse" class="div-input__label">Time to Elapse</label>
              <input type="number" id="timeToElapse" data-time-to-elapse
              autocomplete="off"
              class="div-input__input"/>
            </div>
            <div class="div-input">
              <label for="reportedCases" class="div-input__label">Reported Cases</label>
              <input type="number" id="reportedCases" data-reported-cases
              autocomplete="off"
              class="div-input__input"/>
            </div>
            <div class="div-input">
              <label for="totalHospitalBeds" class="div-input__label">Total Hospital Beds</label>
              <input type="number" id="totalHospitalBeds" data-total-hospital-beds
              autocomplete="off"
              class="div-input__input"/>
            </div>
            <div class="div-form__row">
              <div class="div-form__col">
              <div class="div-form__group">
              <label for="periodType" class="div-input__label">Period Type</label>
              <select data-ref="cardDate"
              data-period-type
              id="periodType"
              class="div-input__input -select">
                <option value="Days">
                  Days
                  </option><option value="Weeks">
                  Weeks
                  </option><option value="Months">
                  Months
                  </option>
            </select>
            </div></div>
          </div>
         <button
         data-go-estimate
         class="div-form__button">
          Estimate
          </button>
        </div>
    );
  }
}
