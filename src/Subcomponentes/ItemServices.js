import React, { Component } from 'react';

class ItemServices extends Component {

    state = {};

    componentWillMount() {
        this.setState({ ...(this.props.valores) });
    }

    render() {
        return (
            <div>
                <div className=" owl-item services_item">
						<div className="services_item_inner">
							<div className="service_item_content">
								<div className="service_item_title">
									<h2>{this.state.Titulo}</h2>
								</div>
								<p>{this.state.parrafo}</p>
							</div>
						</div>
					</div>

            </div>

        );
    }
}

export default ItemServices;
