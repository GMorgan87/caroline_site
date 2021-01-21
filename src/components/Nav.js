import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
            <li>
                <Link to="/"><strong>Home</strong></Link>
              </li>
              <li>
                <Link to="/#about"><strong>About Me</strong></Link>
              </li>
              <li>
                <Link className="nav-adult" to="/Adult"><strong>Adult Sessions</strong></Link>
              </li>
              <li>
                <Link className="nav-youth" to="/Youth"><strong>Children & Young People</strong></Link>
              </li>
              <li>
                <Link to="/#cta"><strong>Contact Us</strong></Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
