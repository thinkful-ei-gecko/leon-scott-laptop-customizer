import React from 'react';
import slugify from 'slugify';


export default class ComputerOption extends React.Component {


    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return (
            <div className="feature__item" key={this.props.itemHash}>
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={slugify(this.props.name)}
                    checked={this.props.name === this.props.state.selected[this.props.featureName]}
                    onChange={e => this.props.handleUpdate(this.props.featureName, this.props.item)} />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.name} ({USCurrencyFormat.format(this.props.cost)})
              </label>
            </div>
        );
    }
}