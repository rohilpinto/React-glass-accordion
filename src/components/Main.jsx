import React from "react";

// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

// for the accordion

import data from "../data";
import Content from "./Content";
// console.log(data);

const Main = () => {
  return (
    <div className="Main">
      <div className="outer-card">
        <div className="title-container">
          <h1>Questions And Answers About Login</h1>
        </div>
        <div className="accordion-container">
          {data.map((content) => {
            return <Content content={content} key={content.id} />;
          })}
        </div>
      </div>
      <div className="accordion-content-parent"></div>
    </div>
  );
};

export default Main;
