import React from 'react';
import { Link } from "gatsby";
import AdultSection from '../components/AdultSection'
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';


const Adult = () => {


 return <Layout main={true}>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        {/* <ul className="actions special">
          <li>
              <Link className="button primary" to="/">Adult Sessions</Link>
          </li>
          <li>
            <Link className="button primary" to="#one">Children & Young People</Link>
          </li>
        </ul> */}
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <AdultSection/>
  </Layout>
};

export default Adult;
