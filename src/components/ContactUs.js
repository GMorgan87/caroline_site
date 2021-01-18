import React from 'react'

const ContactUs = () => {
  return (
    <section id="cta" className="wrapper style4">
      <div className="inner contact">
        <header>
          <h2>Contact Us</h2>
          <ul className="actions stacked">
          <li>
              <span className="icon solid fa-phone style1">
                <span className="label">Phone</span>
              </span>
              <p>
                <a href='tel:00447579 801465' rel="noreferrer">07579 801465</a>
              </p>
          </li>
          <li>
           <span className="icon solid fa-at style1">
              <span className="label">Email</span>
            </span>
            <p>
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
  )
}

export default ContactUs
