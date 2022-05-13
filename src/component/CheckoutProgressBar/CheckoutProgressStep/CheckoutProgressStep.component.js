import React from "react";
import StepName from "./StepName/StepName.component";
import StepNumber from "./StepNumber/StepNumber.component";
import "./CheckoutProgressStep.styles.scss"

class CheckoutProgressStep extends React.Component {
    render(){
        const isCompletedStyle = this.props.currentStep >= 
        this.props.index ? true : false;

        return <div className="CheckoutProgressStep">
            <StepNumber elementStep={this.props.index + 1} isCompletedStyle={isCompletedStyle}/>
            <StepName stepName={this.props.elementStep.title} isCompletedStyle={isCompletedStyle}/>
        </div>
    }
}

export default CheckoutProgressStep;