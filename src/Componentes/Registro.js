import React, { Component } from "react";
import "../css/Login.css";

class Registro extends Component {
  state = { User: "", Password: "", stilo: 'login', btntitle: 'bhutonFlotante' };

  Cambio = e => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState({ [name]: value }, () => console.log(this.state[name]));
  };

  changeVisibility = () => {
    console.log('entro')
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
  render() {
    return (
      <div>
        <div className={this.state.stilo}>
          <i className="fas fa-user-plus"></i>
          <form method="post">

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
            <button type="submit" value="submit" className="btnstart">
              Iniciar Sesión
          </button>
            <br></br>
            <button type="submit" value="submit" className="signin">
              Registrarse
          </button>
          </form>
        </div>
        <button id="btnlogin" type='button' className={this.state.btntitle} onClick={this.changeVisibility}>Login</button>
      </div>
    );
  }
}
export default Registro;
