import React from 'react';
import ChildSection from '../components/ChildSection'
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';


const Youth = () => {


 return <Layout main={false}>
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

    <ChildSection/>
  </Layout>
};

export default Youth;
