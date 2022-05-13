import React from "react";
import { withRouter } from 'react-router-dom';
import CheckoutProgressLine from "./CheckoutProgressLine/CheckoutProgressLine.component";
import CheckoutProgressStep from "./CheckoutProgressStep/CheckoutProgressStep.component";
import "./CheckoutProgressBar.style.scss"

class CheckoutProgressBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentStepIndex: 0
        }
    }

    stepMapToArr = Object.values(this.props.stepMap);
    
    componentDidMount() {
        const currentStepIndex = this.stepMapToArr.findIndex((step) => step.url === `/${this.props.match.params.step}`)
        this.setState({currentStepIndex})
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.step !== this.props.match.params.step){
            const currentStepIndex = this.stepMapToArr.findIndex((step) => step.url === `/${this.props.match.params.step}`)
            this.setState({currentStepIndex})
        }
    }

    render(){

        console.log(Object.values(this.props.stepMap));
        console.log(this.state.currentStepIndex)

        return<div className="CheckoutProgressBar">
            <div className="CheckoutProgressBarWrapper">
                {this.stepMapToArr.map((step, index) => {
                    return <>
                        <CheckoutProgressLine currentStep={this.state.currentStepIndex} elementStep={step} index={index}/>
                    {step.areTotalsVisible && 
                        <CheckoutProgressStep currentStep={this.state.currentStepIndex} elementStep={step} index={index}/>
                    }
                    </>
                })}
            </div> 
        </div>
    }
}

export default withRouter(CheckoutProgressBar);