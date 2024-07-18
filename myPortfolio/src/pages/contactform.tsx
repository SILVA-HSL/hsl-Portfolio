import React from 'react';
import './contactform.css';

const ContactForm: React.FC = () => {
  return (
    <form action="https://formspree.io/f/xjkbkdvk" method="POST">
      <div className="mb-3 ">
        <label htmlFor="name" className="form-label" style={{fontStyle:' Arial, sans-serif',fontSize:'1.2em',fontWeight:'bold'}}>Name</label>
        <input type="text" className="form-control" placeholder="enter your name" id="name" name="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label" style={{fontStyle:' Arial, sans-serif',fontSize:'1.2em',fontWeight:'bold'}}>Email address</label>
        <input type="email" placeholder='enter your email' className="form-control" id="email" name="_replyto" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label" style={{fontStyle:' Arial, sans-serif',fontSize:'1.2em',fontWeight:'bold'}}>Message</label>
        <textarea className="form-control" placeholder='enter your message' id="message" name="message" rows={4} required></textarea>
      </div>
      <center><button type="submit" className="btn btn-submit" style={{}}>Submit</button></center>
    </form>
  );
};

export default ContactForm;
