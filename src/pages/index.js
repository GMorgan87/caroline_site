import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Welcome to Clear Mind Counselling 
          </h2>
          <p>
            Finding clarity, can be an elusive challenge in today’s world, particularly when feeling overwhelmed by
            demands and expectations from ourselves and others. At Clear Mind Counselling, we believe that taking time
            out to find the space to think, and talk things through, can make all the difference. 
            <br />
            <br />
            We offer counselling and psychotherapy services to individuals of all ages, online via video link.
            With the option of outdoor sessions available, we aim to make therapy as accessible and comfortable,
            as possible.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-desktop major style1">
              <span className="label">Television</span>
            </span>
          </li>
          <li>
            <span className="icon fa-comments major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-leaf major style3">
              <span className="label">at</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section id="about" className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            About me
          </h2>
          <p>
            I am qualified to Masters level in Counselling and Psychotherapy from the University of Strathclyde.
             I have also undertaken advanced training in Emotion-Focused Therapy allowing me to work in an evidence-based 
             manner, adapting my skills to best match what you need from counselling.   
             I can offer a safe, warm and calming space for you to explore what is going on for you.  
            <br/>
            <br/>
            As a person-centred counsellor, I work from the foundational belief that you as the client, 
            are the expert of your own life.  I believe that everyone has their own answers and  given a supportive 
            environment to explore your concerns and emotions, you will be able to draw upon your own inner resources, 
            to find clarity and confidence. 
            <br />
            <br />
            Having worked for many years in the mental health field as a registered Occupational Therapist, 
            I offer a holistic approach allowing you the time and space to find a way forward, at your own pace.
          </p>
        </div>
      </section>

      <section id="outdoor" className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Outdoor Sessions
          </h2>
          <p>
            Walking and talking outdoors can have significant benefits and may feel like a more comfortable, 
            less confined space for you .   Outdoor sessions usually take place at Victoria Park, 
            but I would be delighted to discuss alternative options with you. 
          </p>
        </div>
      </section>

      <section id="why" className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Why choose Counselling?
          </h2>
          <p>
            There is a common myth that you should only go to counselling if you are in crisis or have serious psychological 
            difficulties.   At Clear Mind, we believe counselling can be for anyone.  
            <br/>
            <br/>
            Counselling allows us to gain new insight into who we are, the problems we are facing and new perspectives on how 
            to overcome our issues and move forward.   
            <br/>
            <br/>
            As humans, it’s normal for us all to face challenges in life, to feel confused, anxious, overwhelmed or stuck.   
            But, why talk to a stranger about the issues we are experiencing?  Why not just talk to a friend or family member? 
            Talking to a therapist is different from talking to someone who knows you.   Therapists, are trained to listen in a 
            non-judgemental way.   We won’t react with surprise, disgust with what you tell me or how your feeling.  Counselling 
            is about feeling safe, heard, understood and valued. 
          </p>
        </div>
      </section>

      <section id="right" className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Is Counselling right for me?
          </h2>
          <p>
            Therapy can help people overcome issues by giving them insights into how their minds work, 
            what they want, and why they think and act the way they do.  Often counselling helps people 
            to feel more empowered and hopeful about the future. If you are not feeling yourself lately, 
            therapy is one of the best options to find a way forward.
          </p>
        </div>
      </section>

      <section id="first" className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            First Steps 
          </h2>
          <p>
            I understand that choosing to go for counselling  can be daunting, but it can also be the first steps on an 
            incredibly rewarding journey.  I offer a free telephone consultation, to allow you to ask me any questions 
            you may have.  Together we can explore if counselling is the right option for you at this time.   
            lease feel free to get in touch if you would like to find out more.  
            <br/>
            If you decide to go ahead, you will be invited to attend for a first session at a mutually agreed time.   
            Together we will go over what you hope to get out of counselling and how I may be able to help you. 
            <br/>
            After this initial appointment, you would attend, generally speaking, for an hour once a week.
            <br/>
            The length of counselling varies from person to person and we would regularly review our progress.  
            There is no obligation to continue, or if you decide once you start that it is not working for you, 
            and the contract can be terminated at any time.
          </p>
        </div>
      </section>

    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
