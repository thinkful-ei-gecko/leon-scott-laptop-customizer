import React from 'react';

export default class CartItem extends React.Component {


    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return (
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.featureName} </div>
                <div className="summary__option__value">{this.props.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(this.props.cost)}
                </div>
            </div>
        )
    }
}