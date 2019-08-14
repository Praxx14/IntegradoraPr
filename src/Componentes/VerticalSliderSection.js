import React, { Component } from 'react';
import '../App.css';

class VerticalSliderSection extends Component {

    state={};

    componentWillMount() {
        this.setState({ ...(this.props.valores1) });
    }

    render(){
        return(
            <div>
                <div className="v_slider_item">
                    <h1>{this.state.fragmento1}</h1>
                    <p>{this.state.parrafo}</p> 
                </div>
            </div>
        );
    }
    
}
export default VerticalSliderSection;