import React from "react";
import "./StepNumber.styles.scss"

class StepNumber extends React.Component {
    render(){
        const stepNumberCompletedStlye = this.props.isCompletedStyle ? "StepNumber--completed" : "";
        return <div className={`StepNumber ${stepNumberCompletedStlye}`}>
            {this.props.elementStep}
            </div>
    }
}

export default StepNumber;