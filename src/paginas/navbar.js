// import logo from '../logo.svg';
import logo from '../assets/img/logosite.svg';
import React, { Component } from 'react'
import { FaAddressBook } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';
import { VscSettingsGear } from 'react-icons/vsc';
import { BsLightbulbFill } from 'react-icons/bs';
import {FaRegHandshake} from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

export default class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <HashLink to="/#inicio" className="navbar-brand">
          <img src={logo} alt="logotipo" width="36" />
        </HashLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <HashLink to="/#projeto" className="nav-link">
                <VscSettingsGear size={18} />
                <span className="m-1">Projetos</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#orientacoes" className="nav-link">
                <BsLightbulbFill size={18} />
                <span className="m-1">Orientações</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#parceiros" className="nav-link">
                <FaRegHandshake size={18} />
                <span className="m-1">Parceiros</span>
              </HashLink>
            </li>
          </ul>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <HashLink to="/#contato" className="nav-link">
                <button className="btn btn-accent2 text-light">
                  <FaAddressBook size={18} />
                  <span className="m-2">Contato</span>
                </button>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#sobre" className="nav-link">
                <button className="btn btn-accent2 text-light">
                  <AiFillInfoCircle size={18} />
                  <span className="m-2">Sobre Nós</span>
                </button>
              </HashLink>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}
