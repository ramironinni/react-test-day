import React from "react";
import "./StepName.styles.scss";

class StepName extends React.Component {
    render(){
        const stepNameCompletedStlye = this.props.isCompletedStyle ? "StepName--completed" : "";
        return <div className={`StepName ${stepNameCompletedStlye}`}>{this.props.stepName}</div>
    }
}

export default StepName;