/*import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;*/

import 'bootstrap/dist/css/bootstrap.css'
import './styles/Badge.css';
import '../global.css'
import React from "react";
import confLogo from '../images/badge-header.svg'


class Badge extends React.Component {

  render() {
    return (
      <div className="Badge">
        <div  className= "Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img src="https://gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Jose <br /> Lozano
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@jose_lozano</div>
        </div>
        <div className="Badge__footer">
          <p>#TamañoFamilyConf</p>
        </div>
      </div>
    );
  }
}

export default Badge;