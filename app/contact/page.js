'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', grade: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="bg-tmc-background py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-tmc-primary">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-tmc-text/80 mt-4">
            Have a question? Fill out the form below or send us a message on WhatsApp. We're happy to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200/80">
            <h2 className="font-heading text-2xl font-bold text-tmc-primary mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-tmc-text mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tmc-accent focus:border-tmc-accent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-tmc-text mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tmc-accent focus:border-tmc-accent transition"
                />
              </div>
              <div>
                <label htmlFor="grade" className="block text-sm font-bold text-tmc-text mb-2">Grade</label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  placeholder="e.g., Grade 10"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tmc-accent focus:border-tmc-accent transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-tmc-text mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-tmc-accent focus:border-tmc-accent transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-tmc-primary text-white font-heading font-bold py-3 px-6 rounded-md hover:bg-tmc-primary/90 transition-colors duration-200 disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-green-600 font-semibold text-center">Message sent! We'll get back to you shortly.</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 font-semibold text-center">Something went wrong. Please try WhatsApp instead.</p>
              )}
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200/80 text-center">
                <h2 className="font-heading text-2xl font-bold text-tmc-primary mb-4">Chat on WhatsApp</h2>
                <p className="text-tmc-text/80 mb-6">
                    For a faster response, tap the button below to chat with us directly on WhatsApp.
                </p>
                <a
                    href="https://chat.whatsapp.com/Eub3KClmV7kJfeoklg1oZf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-heading font-bold py-3 px-8 rounded-full hover:bg-[#20ba57] transition-colors duration-200"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    <span>Chat Now</span>
                </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200/80 text-center">
                <h3 className="font-heading text-lg font-bold text-tmc-primary mb-2">Response Time</h3>
                <p className="text-tmc-text/80">We do our best to respond to all inquiries within <span className="font-bold">24 hours</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
