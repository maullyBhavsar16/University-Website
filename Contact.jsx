import React from 'react'
import './Contact.css'
import msg_icon  from '../../assets/msg-icon.png'
import mail_icon  from '../../assets/mail-icon.png'
import phone_icon  from '../../assets/phone-icon.png'
import location_icon  from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'





const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0da7d767-190e-4362-974b-24fe083dd136");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success",data);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
       <div className="contact-col">
        <h3>send us message <img src = {msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact from or find our contact
            information below.Yout feedback, questions, and suggestions are 
            import to us as we strive to provide exceptional service to our
            univeristy community.</p>
            <ul>
                <li><img src ={mail_icon} alt="" />Contact@GreatStack.dev</li>
                <li><img src ={phone_icon} alt="" />+1 123-456-7890</li>
                <li><img src ={location_icon} alt="" />Contact@GreatStack.dev</li>
                <li>77 Massachusetts Ave, Cambridge<br/>MA 02139, United 
                Ststes</li>
            </ul>
       </div>
       <div className="contact-col">
          <form onSubmit={onSubmit}>
              <label> Your Name</label>
              <input type="text" name = 'name' placeholder='Enter your name' required/>
              <label> Phone Number</label>
              <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
              <label>Write your message here </label>
              <textarea name="message "  rows="6" placeholder='enter your message' required></textarea>
              <button type='Submit' className='btn dark-btn'>Submit now<img src ={white_arrow} alt=" "/></button>
            </form>
            <span>{result}</span> 
       </div>
    </div>
  )
}

export default Contact