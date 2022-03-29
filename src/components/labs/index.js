import React from "react";
import { Link } from "react-router-dom";

import ReduxExamples from "./redux-examples";

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      <Link to="/tuiter/">Tuiter</Link>
      <ReduxExamples />
    </>
  );
};

export default Labs;
