//Create a React app from scratch.

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const hourOfDay = currentDate.getHours();

let greeting = "";
const customStyle = {};

if (hourOfDay >= 0 && hourOfDay < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (hourOfDay >= 12 && hourOfDay < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good evening";
  customStyle.color = "blue";
}

if (hourOfDay)
  ReactDOM.render(
    <div>
      {hourOfDay}
      <h1 style={customStyle} className="heading">
        {greeting}
      </h1>
    </div>,
    document.getElementById("root")
  );
