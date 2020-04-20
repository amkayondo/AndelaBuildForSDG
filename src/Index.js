import React, { Component, Suspense, lazy } from "react";
import Loading from "./components/Loading";

const UserInputForm = lazy(() => import("./components/UserInputForm"));

export default class Index extends Component {
  render() {
    return (
            <Suspense fallback={<Loading/>}>
            <UserInputForm/>
            </Suspense>
    );
  }
}
