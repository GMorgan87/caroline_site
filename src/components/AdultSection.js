import React from 'react'
import pic1 from '../assets/images/Caroline.png';
import pic2 from '../assets/images/outdoor.jpg';
import pic3 from '../assets/images/why.jpg';
import pic4 from '../assets/images/for_me.jpg';
import pic5 from '../assets/images/begin.jpg';
import pic6 from '../assets/images/Fees.jpg';
import logo1 from '../assets/images/BACP_Logo.png'
import logo2 from '../assets/images/HCPC_Logo.jpg'

const q = () => {
  return (
        <div>
            <section id="two" className="wrapper alt style2">
            
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
                        less confined space for you. Outdoor sessions usually take place at Victoria Park, 
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
                        difficulties. At Clear Mind, we believe counselling can be for anyone.  
                    </p>
                    <p>
                        Counselling allows us to gain new insight into who we are, the problems we are facing and new perspectives on how 
                        to overcome our issues and move forward.   
                    </p>
                    <p>
                        As humans, it’s normal for us all to face challenges in life, to feel confused, anxious, overwhelmed or stuck.   
                        But, why talk to a stranger about the issues we are experiencing?  Why not just talk to a friend or family member? 
                        Talking to a therapist is different from talking to someone who knows you. Therapists, are trained to listen in a 
                        non-judgemental way. I won’t react with surprise or disapproval with what you tell me or how you are feeling. Counselling is about
                        feeling safe, heard, understood and valued.
                    </p>
                    </div>
                </section>

            <section id="right" className="spotlight">
                <div className="image">
                <img src={pic4} alt="" />
                </div>
                <div className="content">
                <h2>
                    Is Counselling right for me?
                </h2>
                <p>
                    Therapy can help people overcome issues by giving them insights into how their minds work, 
                    what they want, and why they think and act the way they do. Often counselling helps people 
                    to feel more empowered and hopeful about the future. If you are not feeling yourself lately, 
                    therapy is one of the best options to find a way forward.
                </p>
                </div>
            </section>

            <section id="first" className="spotlight">
                <div className="image">
                <img src={pic5} alt="" />
                </div>
                <div className="content">
                <h2>
                    First Steps 
                </h2>
                <p>
                    I understand that choosing to go for counselling can be daunting, but it can also be the first steps on an 
                    incredibly rewarding journey. I offer a free telephone consultation, to allow you to ask me any questions 
                    you may have. Together we can explore if counselling is the right option for you at this time.   
                    Please feel free to get in touch if you would like to find out more.  
                </p>
                <p>
                    If you decide to go ahead, you will be invited to attend for a first session at a mutually agreed time.   
                    Together we will go over what you hope to get out of counselling and how I may be able to help you. 
                </p>
                <p>
                    After this initial appointment, you would attend, generally speaking, for an hour once a week.
                </p>
                <p>
                    The length of counselling varies from person to person and we would regularly review our progress.  
                    There is no obligation to continue, or if you decide once you start that it is not working for you, 
                    and the therapy can be terminated at any time.
                </p>
                </div>
            </section>

            <section id="fees" className="spotlight">
                <div className="image">
                <img src={pic6} alt="" />
                </div>
                <div className="content">
                <h2>
                    Fees 
                </h2>
                <p>
                    Individual Sessions last for an hour and cost between £40-50. Discounted Student rates are also available.  
                    Please get in touch to discuss further.
                </p>
                </div>
            </section>

            </section>
            </div>

)
}

export default q