/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, lazy, Suspense } from "react";
import LoadingForm from "./LoadingForm";
import "../assets/css/formStyle.css";
import BgImg from "../assets/images/covid-bg.png";

const InputData = lazy(() => import("./InputData"));

export default class UserInputForm extends Component {
  render() {
    return (
      <div>
        <div className="tpdf">
          <a href="https://bit.ly/2VutZmr">
            See on GitHub
          </a>
        </div>
      <div class="mainfds">
      <div class="div-form">
        <div class="div-list">
          <div class="div-item">
            <div class="div-item_sl">
              <img className="bgimgd" src={BgImg} />
            </div>
          </div>
        </div>
        <Suspense fallback={<LoadingForm/>}>
          <InputData/>
        </Suspense>
        </div></div></div>
    );
  }
}
