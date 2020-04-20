import React, { Component, lazy, Suspense } from "react";
import LoadingForm from "./LoadingForm";
import "../assets/css/formStyle.css";
import BgImg from "../assets/images/covid-bg.png";

const InputData = lazy(() => import("./InputData"));

export default class UserInputForm extends Component {
  render() {
    return (
      <div>
        <nav className="tpdf">
          <a href="https://bit.ly/2VutZmr">
            See on GitHub
          </a>
        </nav>
      <main class="mainfds">
      <div class="div-form">
        <div class="div-list">
          <div class="div-item">
            <div class="div-item_sl"
            style={{ background: `url(${BgImg}) center center / cover` }}
            >
            </div>
          </div>
        </div>
        <Suspense fallback={<LoadingForm/>}>
          <InputData/>
        </Suspense>
        </div></main>
        </div>
    );
  }
}
