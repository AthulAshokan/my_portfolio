import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({...prevData, [name]: value}))
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_vm07l3j', 'template_daw2l7j', form.current, {
        publicKey: 'Y77_DqLjEx01V9Yuz',
      })
      .then(
        () => {
          console.log('SUCCESS!');

        // Reset form fields
        setFormData({ name: '', email: '', message: '' });
        setSuccess('Message sent successfully!');
        form.current.reset(); // Optional: resets the form element itself
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div>
      <p className='text-cyan py-2' >{success}</p>
      <form action="" className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
        <input
           name='name' 
           value={formData.name}
            type="text" 
            placeholder='Your Name' 
            required 
            onChange={(e)=>handleInputChange(e)}
            className='h-12 rounded-lgn bg-lightBrown px-2 '
            
        />
        <input 
           name='email'
           value={formData.email}
           type="email" 
           placeholder='Your Email' 
           required 
           className='h-12 rounded-lgn bg-lightBrown px-2 ' 
           onChange={(e)=>handleInputChange(e)}
        />
        <textarea 
          name='message'
          value={formData.message}
          placeholder='Message' 
          rows="9" 
          cols="50"  
          required 
          className=' rounded-lgn bg-lightBrown p-2 '
          onChange={(e)=>handleInputChange(e)}
        >
        </textarea>
        <button 
          type='submit' 
          className='w-full  rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan  transition-all duration-500'
            
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
