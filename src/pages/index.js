import React from 'react';
import { Link } from "gatsby";
import AdultSection from '../components/AdultSection'
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';


const IndexPage = () => {

 return <Layout main={true}>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <div>
        <ul className="actions special">
          <li>
            <Link className="button primary" to="#one">Adult Sessions</Link>
          </li>
          <li>
            <Link className="button primary" to="/Youth/">Children & Young People</Link>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <AdultSection/>

    <section id="cta" className="wrapper style4">
      <div className="inner contact">
        <header>
          <h2>Contact Us</h2>
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
              <p>Partick</p>
              <p>Glasgow</p>
              <p>Lanarkshire</p>
              <p>G11</p>
            </div>
          </li>
          </ul>

        </header>
        
      </div>
    </section>
  </Layout>
};

export default IndexPage;
