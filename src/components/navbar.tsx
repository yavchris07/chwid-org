import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';
import logo from '../assets/icons/lb.png'


export default function NavBar() {
  return (
    <nav>
      <div className='icon'>
        <img src={logo} alt="icon" />
      </div>
      <div className='items'>
        <ul>
          <li>
            <NavLink 
              to={'/'} 
              className='link'
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={'/about'} 
              className='link'
            >
             Apropos
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={'/news'} 
              className='link'
            >
           Actualités
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={'/blogs'} 
              className='link'
            >
           Blogs
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={'/join'} 
              className='link'
            >
            Nous rejoindre
            </NavLink>
          </li>

          <li>
            <NavLink 
              to={'/contact'} 
              className='link'
            >
            Nous Contacter
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

  