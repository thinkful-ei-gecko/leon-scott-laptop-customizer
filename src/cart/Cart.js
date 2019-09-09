import React from 'react';
import CartItem from './cart-item/CartItem';
import './cart.css'

export default class Cart extends React.Component {

    generateCart() {
        const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.state.selected[feature];
            return <CartItem key={featureHash}
                featureName={feature}
                name={selectedOption.name}
                cost={selectedOption.cost} />
        })
        return summary;
    }

    calculateTotal() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        const total = Object.keys(this.props.state.selected).reduce(
            (acc, curr) => acc + this.props.state.selected[curr].cost,
            0
        );
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total: </div>
                <div className="summary__total__value">{USCurrencyFormat.format(total)}</div>
            </div>
        )
    }

    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {this.generateCart()}
                {this.calculateTotal()}
            </section>
        );
    }
}