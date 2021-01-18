import React from 'react'
import { Link } from "gatsby";
import pic1 from '../assets/images/Caroline.png';
import logo1 from '../assets/images/BACP_Logo.png'
import logo2 from '../assets/images/HCPC_Logo.jpg'

const q = () => {
  return (
    <div>
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
                </p>
                <p>
                    We offer counselling and psychotherapy services to individuals of all ages, online via video link.
                    With the option of outdoor sessions available, we aim to make therapy as accessible and comfortable,
                    as possible.
                </p>
                </header>
                <ul className="icons major">
                <li>
                    <span className="icon solid fa-desktop major style1">
                    <span className="label">Desktop</span>
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
                </p>
                <p>
                    As a person-centred counsellor, I work from the foundational belief that you as the client, 
                    are the expert of your own life. I believe that everyone has their own answers and given a supportive 
                    environment to explore your concerns and emotions, you will be able to draw upon your own inner resources, 
                    to find clarity and confidence. 
                </p>
                <p>
                    Having worked for many years in the mental health field as a registered Occupational Therapist, 
                    I offer a holistic approach allowing you the time and space to find a way forward, at your own pace.
                </p>
                </div>
            </section>

            <div className="qual-logos">
                        <ul>
                            <li>
                                <img src={logo1} alt="" />
                            </li>
                            <li>
                                <img src={logo2} alt="" />
                            </li>
                        </ul>
                    </div>

            <section id="experience" className="spotlight">
                <div className="experience">
                <h2>
                    Experience
                </h2>
                <p>
                    I have extensive experience working in child, adolescent and adult mental health services. 
                    Since 2007 I have worked within a range of community mental health teams, child and family services, 
                    student support teams, NHS occupational health settings, as well as school-based counselling services.  
                </p>
                
                <p>2007-2010 - Community Mental Health Practitioner (Adults) - Turning Point Scotland</p>
                <p>2010-2011 - Homeless Shelter Team Leader - Bethany Trust</p>
                <p>2011-2012 - Homeless Prevention Team - Aberdeen City Coucil & Shelter Scotland</p>
                <p>2013-2015 - Children & Young Persons Wellbeing Practitioner - Action For Children</p>
                <p>2015-2017 - Community Mental Health Team (Adults) - Penumbra Scotland</p>
                <p>2017 - Onwards - I have had the privilege of working as a Counsellor with the following 
                    Organisations & Charities:</p>
                <ul className="u-list">
                    <li>Stepping Stones - Adult Counselling Service</li>
                    <li>Strathclyde Student Services - Students & University Staff</li>
                    <li>NHS Occupational Health Department - Counselling Service for NHS Staff</li>
                    <li>Place2Be - Primary School-aged Children</li>
                    <li>The Spark - Primary School-aged Children</li>
                    <li>Mable Therapy - Online Counselling for Children & Young People</li>
                    <li>Teentalk Scotland - School-based Counselling for Young People</li>
                </ul>
                        
                <p>
                    I also currently work as a Mental Health Mentor with University and College students throughout Scotland. 
                    If you are a student interested in finding out about mentoring, please get in touch
                </p>

                </div>
            </section>

            <div className="link-btns">
                <ul className="actions special">
                    <li>
                        <Link className="button primary" to="/Adult">Adult Sessions</Link>
                    </li>
                    <li>
                        <Link className="button primary" to="/Youth">Children & Young People</Link>
                    </li>
                </ul>
            </div>

        </section>
    </div>

)
}

export default q