"use client";

import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function ContactForm({toemail}) {
  const [errors, setErrors] = React.useState({});
  const [mailSent, setMailSent] = React.useState('');
  const [loader, setLoader] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the form from refreshing the page
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Validate the data
    const { name, email, subject, message } = data;
    let formIsValid = true;
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      formIsValid = false;
      newErrors.name = 'Please enter your name.';
    }

    // Email validation
    if (!email.trim()) {
      formIsValid = false;
      newErrors.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        formIsValid = false;
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    // Subject validation
    if (!subject.trim()) {
      formIsValid = false;
      newErrors.subject = 'Please enter a subject.';
    }

    // Message validation
    if (!message.trim()) {
      formIsValid = false;
      newErrors.message = 'Please enter a message.';
    }

    if (!formIsValid) {
      setErrors(newErrors);
      setMailSent('');
      return;
    } else {
      setErrors({});
    }

    // If all validations pass, proceed to sendMail
    try {
    setLoader(true);
      const res = await sendMail(data);
      if (res) {
        if (res.success && res.id) {
          setMailSent('Email sent successfully!');
          setErrors({});
          event.target.reset(); // Optionally reset the form
          setLoader(false);
        } else {
          setErrors({ form: res.message || 'Something went wrong.' });
          setLoader(false);
          setMailSent('');
        }
      }
    } catch (err) {
      console.error(err);
      setErrors({ form: 'An error occurred while sending the email.' });
      setLoader(false);
      setMailSent('');
    }
  };

  async function sendMail(formData) {
    const payload = {
      ...formData,
      toEmail: toemail,
    }
    try {
      const res = await fetch('http://localhost:3000/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Send the form data
      });
      const result = await res.json();
      return {success: true, message: result.message, id: result.id};
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return (
    <div className='p-4'>
    
    {/* Loader Overlay */}
      {loader && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <AiOutlineLoading3Quarters className="text-white text-6xl animate-spin" />
            <p className="text-white mt-4">Loading...</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          {/* Name Field */}
          <div className='flex flex-col'>
            <label htmlFor='name' className='uppercase text-sm py-2'>
              Name
            </label>
            <input
              type='text'
              name='name'
              className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && (
              <span className='text-red-500 text-sm'>{errors.name}</span>
            )}
          </div>

          {/* Email Field */}
          <div className='flex flex-col'>
            <label htmlFor='email' className='uppercase text-sm py-2'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <span className='text-red-500 text-sm'>{errors.email}</span>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className='flex flex-col py-2'>
          <label htmlFor='subject' className='uppercase text-sm py-2'>
            Subject
          </label>
          <input
            type='text'
            name='subject'
            className={`border-2 rounded-lg p-3 flex border-gray-300 ${
              errors.subject ? 'border-red-500' : ''
            }`}
          />
          {errors.subject && (
            <span className='text-red-500 text-sm'>{errors.subject}</span>
          )}
        </div>

        {/* Message Field */}
        <div className='flex flex-col py-2'>
          <label htmlFor='message' className='uppercase text-sm py-2'>
            Message
          </label>
          <textarea
            className={`border-2 rounded-lg p-3 flex border-gray-300 ${
              errors.message ? 'border-red-500' : ''
            }`}
            name='message'
            rows='10'
          ></textarea>
          {errors.message && (
            <span className='text-red-500 text-sm'>{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          className='w-full p-4 text-gray-100 mt-4 bg-blue-500 hover:bg-blue-600 rounded-lg'
          type='submit'
        >
          Send Message
        </button>

        {/* Success and Error Messages */}
        {mailSent && (
          <div className='text-green-500 text-center py-2'>{mailSent}</div>
        )}
        {errors.form && (
          <div className='text-red-500 text-center py-2'>{errors.form}</div>
        )}
      </form>
    </div>
  );
}
