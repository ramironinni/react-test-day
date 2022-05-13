import React from "react";
import "./CheckoutProgressLine.style.scss"

class CheckoutProgressLine extends React.Component {
    render(){        
        console.log(this.props.elementStep)
        const isCompletedStyle = this.props.currentStep >= 
        this.props.index ? "CheckoutProgressLine--completed" : "";

        return <div className={`CheckoutProgressLineWrapper`}>
            <div className={`CheckoutProgressLine ${isCompletedStyle}`}></div>
            </div>
    }
}

export default CheckoutProgressLine;