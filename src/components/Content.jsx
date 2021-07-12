import React, { useState } from "react";

import ArrowDown from "@material-ui/icons/KeyboardArrowDownSharp";
import ArrowUp from "@material-ui/icons/KeyboardArrowUpSharp";

const Content = ({ content }) => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="accordion-wrapper" onClick={() => setIsTrue(!isTrue)}>
      <div className="content-wrapper">
        <div className="question">{content.question} </div>
        <div className="answer"> {isTrue && <div>{content.answer}</div>}</div>
      </div>
      <div className="arrow-wrapper">{isTrue ? <ArrowUp /> : <ArrowDown />}</div>
    </div>
  );
};

export default Content;
