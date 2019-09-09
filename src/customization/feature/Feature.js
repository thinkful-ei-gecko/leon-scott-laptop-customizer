import React from 'react';
import ComputerOption from './computer-option/ComputerOption'
import slugify from 'slugify';

export default class Feature extends React.Component {


generateOptions() {
    const options = this.props.featureArray.map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return <ComputerOption itemHash={itemHash} 
        name={item.name} 
        cost={item.cost} 
        key={itemHash} 
        item={item}
        handleUpdate={this.props.handleUpdate}
        featureName={this.props.featureName}
        state={this.props.state} />
    })
    return options;
}



    render() {
      return (
        <fieldset className="feature" key={this.props.featureHash}>
          <legend className="feature__name">
            <h3>{this.props.featureName}</h3>
          </legend>
          {this.generateOptions()}
        </fieldset>
      );
    }
}