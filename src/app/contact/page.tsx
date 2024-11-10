"use client";

import React from 'react';
import { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    alert('Form submitted');

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      
      <section className="container mx-auto h-screen p-10 bg-slate-100">
        <h2 className="text-3xl font-bold text-center mb-6 underline">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-400 rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-400 rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-400 rounded"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:-translate-y-2 transition-transform duration-300">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
 