import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component"
import {ContentWrapper as SourceContentWrapper} from "SourceComponent/ContentWrapper/ContentWrapper.component"
import "./Checkout.extension.style.scss"
import CheckoutProgressBar from "Component/CheckoutProgressBar/CheckoutProgressBar.component";

class Checkout extends SourceCheckout {
    render(){        
        return (
            <main block="Checkout">
                <CheckoutProgressBar stepMap={this.stepMap}/>
                <SourceContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </SourceContentWrapper>
            </main>
        );
    }
}

export default Checkout;