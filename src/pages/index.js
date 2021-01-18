import React from 'react';
import AboutMe from '../components/AboutMe'
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
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>
    <AboutMe/>
  </Layout>
};

export default IndexPage;
