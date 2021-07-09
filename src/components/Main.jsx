import React from "react";

// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

// for the accordion
// import ArrowDown from "@material-ui/icons/KeyboardArrowDownSharp";
// import ArrowUp from "@material-ui/icons/KeyboardArrowUpSharp";

const Main = () => {
  return (
    <div className="Main">
      <div className="outer-card">
        <div className="accordion-parent">
          <div className="question">Do I have to allow the use of cookes?</div>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
