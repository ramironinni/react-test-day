import React from "react";
import "./CheckoutProgressLine.style.scss"

class CheckoutProgressLine extends React.Component {
    render(){        
        const isCompletedStyle = this.props.currentStep >= 
        this.props.index || this.props.currentStep + 1 === this.props.totalLength - 1 ? "CheckoutProgressLine--completed" : "";

        return <div className={`CheckoutProgressLineWrapper`}>
            <div className={`CheckoutProgressLine ${isCompletedStyle}`}></div>
            </div>
    }
}

export default CheckoutProgressLine;