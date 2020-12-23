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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-youth" to="/Youth"><strong>Children & Young People</strong></Link>
              </li>
              {/* <li>
                <Link to="#about">About Me</Link>
              </li>
              <li>
                <Link to="#outdoor">Outdoor Sessions</Link>
              </li>
              <li>
                <Link to="#why">Why Choose Counselling</Link>
              </li>
              <li>
                <Link to="#right">Is Counselling Right For Me</Link>
              </li>
              <li>
                <Link to="#first">First Steps</Link>
              </li>
              <li>
                <Link to="#fees">Fees</Link>
              </li> */}
              <li>
                <Link to="#cta">Contact Us</Link>
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
