import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="block w-full border p-2"/>
          <input type="email" placeholder="Email" className="block w-full border p-2"/>
          <textarea placeholder="Message" className="block w-full border p-2"></textarea>
          <button className="bg-indigo-500 text-white py-2 px-4">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;