import React, { Component } from 'react';

import '../App.css';
import Buscar from './Buscar.js';
class Pro extends Component {

    state = {};

    CambioLink=(e)=>{
       /* const ruta =e.target.id;
        this.props.history.push({
            pathname: ruta,
        });*/
    };
    render() {
        return (
            <header role="banner">

                <nav className="navbar navbar-expand-md navbar-dark bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">Black Syntax</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
                            <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Reportes">Reportes</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Pro;

