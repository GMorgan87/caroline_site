import React from 'react'
import pic1 from '../assets/images/Why_Counselling.jpg';
import pic2 from '../assets/images/Is_Your_Child.jpg';
import pic3 from '../assets/images/CH_Counselling.jpg';
import pic4 from '../assets/images/YP_Counselling.jpg';
import pic5 from '../assets/images/talk.jpg';
import pic6 from '../assets/images/Fees_Pic.jpg';

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
                    At Clear Mind, we have extensive experience working therapeutically with children &
                    young people and young adults, aged from 8 to 18 years old.  We work across a variety
                    of settings; including Primary and Secondary Schools, as well as online counselling sessions
                    for young clients throughout the UK. 
                </p>
                </header>
            </div>
            </section>

            <section id="two" className="wrapper alt style2">
            <section id="about" className="spotlight">
                <div className="image">
                <img src={pic1} alt="" />
                </div>
                <div className="content">
                <h2>
                    Why is Counselling Important for Young Clients?
                </h2>
                <p>
                    We all communicate how we're feeling through our behaviour - children & young people are no exception.
                    A child or young person who presents as being angry, anxious or who self-harms is communicating dis-stress
                    of some kind.  Counselling helps young clients gradually explore what's happening in their emotional worlds
                    and the effect it's having on their everyday lives.  
                    <br/>
                    <br/>
                    For children & young people, we offer safe, confidential and non-judgemental therapeutic sessions where they
                    can freely express and explore their feelings.  A gentle, non-invasive way of working with young people allows
                    for a trusting relationship to develop between the young client and therapist.  
                </p>
                </div>
            </section>

            <section id="outdoor" className="spotlight">
                <div className="image">
                <img src={pic2} alt="" />
                </div>
                <div className="content">
                <p>Is Your Child:</p>
                <ul>
                    <li>Worried, anxious or depressed and needs support</li>
                    <li>Struggling with anger</li>
                    <li>Suffering from low self-esteem</li>
                    <li>Having challenges at school or at home</li>
                    <li>Having friendship issues or bullying</li>
                    <li>Having behavioural problems</li>
                    <li>Learning to adapt to a new family dynamic</li>
                    <li>ADHD or Autistic traits impacting on daily life</li>
                </ul>
                </div>
            </section>

            <section id="why" className="spotlight">
                <div className="image">
                <img src={pic3} alt="" />
                </div>
                <div className="content">
                <h2>
                    Counselling for Children 
                </h2>
                <p>
                    Counselling children involves helping the child develop a positive attitude to life, how to recognise
                    personal strengths and how to express feelings and emotions. It does not involve making decisions for
                    the child, or imposing beliefs on them. 
                    <br/>
                    <br/>
                    Developing a safe, compassionate therapeutic relationship with your child is at the heart of our work
                    with children. We bring kindness, honesty and a sense of fun to sessions and believe play and laughter
                    help the healing process.
                </p>
                </div>
            </section>

            <section id="right" className="spotlight">
                <div className="image">
                <img src={pic4} alt="" />
                </div>
                <div className="content">
                <h2>
                    Counselling for Young People
                </h2>
                <p>
                    The transitions from child to teenager, and teenager to adult, are complex and can be fraught with
                    conflict for the entire family. At Clear Mind, we can work with teenagers to navigate these transitions,
                    empowering them to step into a new stage, in a trusted environment. With younger clients, we use creative 
                    methods, such as art or online games, which makes it easier to communicate fears and worries, and 
                    encourage them to express their emotions more freely.
                </p>
                </div>
            </section>

            <section id="first" className="spotlight">
                <div className="image">
                <img src={pic5} alt="" />
                </div>
                <div className="content">
                <h2>
                    Parent/Carer Involvement 
                </h2>
                <p>
                    When working with a child or a young person, their parent or carer will be consulted particularly at
                    the initial stages, and then supported throughout the process of therapy, in a way that respects
                    confidential and therapeutic space for the child or young person.  
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
                    Sessions are 50 minutes in length and cost £45.
                </p>
                </div>
            </section>

            </section>
            </div>

)
}

export default q