/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, lazy, Suspense } from "react";
import LoadingForm from "./LoadingForm";
import "../assets/css/formStyle.css";

const InputData = lazy(() => import("./InputData"));

export default class UserInputForm extends Component {
  render() {
    return (
      <div class="mainfds">
      <div class="div-form">
        <div class="div-list">
          <div class="div-item">
            <div class="div-item_sl"></div>
          </div>
        </div>
        <Suspense fallback={<LoadingForm/>}>
          <InputData/>
        </Suspense>
        </div></div>
    );
  }
}
