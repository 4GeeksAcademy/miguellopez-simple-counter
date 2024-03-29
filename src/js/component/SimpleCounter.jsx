import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <h4 className>TU NUEVA VIDA EMPIEZA</h4>
            <h1 className id="animated-text">AHORA</h1>
            <div className="calendar">
                <i className="far fa-clock"></i>
                <div className="four">{Math.floor(props.digitFour % 10)}</div>
                <div className="three">{Math.floor(props.digitThree % 10)}</div>
                <div className="two">{Math.floor(props.digitTwo % 10)}</div>
                <div className="one">{Math.floor(props.digitOne % 10)}</div>
            </div>
        </div>
    );
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};



export default SimpleCounter;