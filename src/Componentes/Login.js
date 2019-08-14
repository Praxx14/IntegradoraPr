import React, { Component } from "react";
import Consultas from "../Helpers/Consultas";
import "../css/Login.css";

class Login extends Component {
  state = { User: "", Password: "", stilo: 'login', btntitle: 'bhutonFlotante', btnregister:'register',BoleanVa:false};

  Cambio = e => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  changeVisibility = () => {
    if (this.state.stilo === 'login') {
      this.setState({ stilo: 'login1' })
    } else {
      this.setState({ stilo: 'login' })

    }
    if (this.state.btntitle === 'bhutonFlotante') {
      this.setState({ btntitle: 'bhutonFlotante long' })
    } else {
      this.setState({ btntitle: 'bhutonFlotante' })
    }
  }

  Confirmar= ( ) =>{
       Consultas.authUser(this.state.User,this.state.Password).then(e=>{
        if (e.data !==null) {
          this.setState({BoleanVa:true})
          window.localStorage.setItem({"token": e.data});
        }else{

        }
      });

  }
  render() {
    return (
      <>
        {this.state.BoleanVa ? null: <div className="wraperLogin">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-12">
              <div className={this.state.stilo}>
                {/*<span className="title">Inicie sesión</span>*/}
                <i className="fas fa-sign-in-alt"></i>
                <div>

                  <span>Correo:</span>
                  <br />
                  <input
                      id="User"
                      type="email"
                      value={this.state.User}
                      onChange={this.Cambio}
                  />

                  <br />
                  <div>
                    <span className="passwordtag">Contraseña:</span>
                    <br />
                    <input
                        id="Password"
                        type="password"
                        value={this.state.Password}
                        onChange={this.Cambio}
                    />
                  </div>
                  <br />
                  <button type="button" onClick={this.Confirmar} className="btnstart">
                    Iniciar Sesión
                  </button>
                  <br></br>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-12">
              <button id="btnlogin" type='button' className={this.state.btntitle} onClick={this.changeVisibility}><i
                  className="fas fa-user"></i></button>
            </div>
          </div>
        </div> }
      </>
    );
  }
}
export default Login;
