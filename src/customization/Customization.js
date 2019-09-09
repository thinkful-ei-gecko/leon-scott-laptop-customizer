import React from 'react';
import Feature from './feature/Feature';
import './customization.css'

export default class Customization extends React.Component {

    generateFeatureForm() {
        const features = Object.keys(this.props.featuresList).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return <Feature featureArray={this.props.featuresList[feature]}
                featureName={feature}
                featureHash={featureHash}
                key={featureHash}
                handleUpdate={this.props.handleUpdate}
                state={this.props.state} />
        })
        return features;
    }

    render() {
        return (
            <form className="main__form">
                {this.generateFeatureForm()}
            </form>
        );
    }
}