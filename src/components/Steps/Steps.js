import React from 'react';
import './steps.css';

const Steps = ({ step }) => {
    return(
        <div className="steps-container">
            <div className={ "progress" + (step === 1 ? " progress_active" : "") }>01 customer account</div>
            <div className={"progress" + (step === 2 ? " progress_active" : "")}>02 payment selection</div>
        </div>
    )
}

export default Steps;

