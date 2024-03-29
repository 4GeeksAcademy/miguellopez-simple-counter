//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SimpleCounter from "./component/SimpleCounter";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

//render your react application
let counter = 0;
setInterval(function () {
    const four = Math.floor(counter / 1000);
    const three = Math.floor((counter / 100) % 10);
    const two = Math.floor((counter / 10) % 10);
    const one = Math.floor(counter % 10);
    console.log(four, three, two, one);
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
        document.getElementById("app")
    );
    counter++;
}, 1000);