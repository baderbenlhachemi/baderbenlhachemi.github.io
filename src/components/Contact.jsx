import React from 'react';
import Title from './Title';
import Swal from 'sweetalert2';

function Contact() {
   const handleSubmit = async (e) => {
      e.preventDefault();

      // Prepare form data
      const formData = new FormData(e.target);

      try {
         const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
         });

         if (!response.ok) {
            throw new Error('Failed to submit form');
         }

         // Show success message using SweetAlert2
         Swal.fire({
            icon: 'success',
            title: 'Email submitted successfully!',
            text: 'I will get back to you as soon as possible.',
         });

         // Reset the form fields after successful submission
         e.target.reset();
      } catch (error) {
         console.error('Error submitting form:', error);
         // Show error message using SweetAlert2
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to submit Email. Please try again later.',
         });
      }
   };

   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               onSubmit={handleSubmit} // Call handleSubmit on form submit
               className="flex flex-col w-full md:w-7/12"
            >
               <input type="hidden" name="access_key" value="0e4199cf-7181-41d3-984c-92edbded3310" />
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                  type="submit" // Change type to submit to trigger handleSubmit
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
               >
                  Send Message
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;
