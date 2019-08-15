import React, { Component } from 'react';
import '../App.css';
import { createBrowserHistory as createHistory} from 'history';

const history = new createHistory();
class Newsletter extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    Salir=()=>{
        window.localStorage.removeItem('token');
        history.push('/');
        window.location.reload();
    }
    render(){
        return(
            <header role="banner" style={{background: '#000'}}>

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
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.Salir}>Salir</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
    export default Newsletter;
