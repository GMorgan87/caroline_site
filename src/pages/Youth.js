import React from 'react';
import { Link } from "gatsby";
import ChildSection from '../components/ChildSection'
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';


const Youth = () => {


 return <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
              <Link className="button primary" to="/">Adult Sessions</Link>
          </li>
          <li>
            <Link className="button primary" to="#one">Children & Young People</Link>
          </li>
          <li>
            {/* <Scroll type="id" element="one">
            </Scroll> */}
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <ChildSection/>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Contact Us</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <p>
              <span className="icon solid fa-phone style1">
                <span className="label">Phone</span>
              </span>
              <a href='tel:00447579 80165' rel="noreferrer">07579 80165</a>
            </p>
          </li>
          <li>
          <p>
            <span className="icon solid fa-at style1">
              <span className="label">Email</span>
            </span> 
            <a href='mailto:caroline@clearmindcounselling.co.uk' rel="noreferrer">caroline@clearmindcounselling.co.uk</a>
            </p>
          </li>
          <li>
          <div className="address">
            <span className="icon solid fa-location-arrow style1">
              <span className="label">Desktop</span>
            </span> 
            <p>
              Partick<br/>
              Glasgow<br/>
              Lanarkshire<br/>
              G11
              </p>
              </div>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
};

export default Youth;
