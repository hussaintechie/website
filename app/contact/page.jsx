"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // 1. Gather all the data from the form inputs using their 'name' attributes
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      segment: formData.get('segment'),
      cargo: formData.get('cargo'),
    };

    try {
      // 2. Send the data to your new API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset(); // Clear the form
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        alert("Something went wrong. Please try again.");
        setFormStatus('idle');
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please check your connection.");
      setFormStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-red-200">
      
      {/* 1. PREMIUM HERO SECTION */}
      <div className="relative w-full h-[55vh] min-h-[450px] flex flex-col items-center justify-center pt-10">
        <div className="absolute inset-0 z-0">
          <img 
            src="/banner/test.png" 
            alt="Logistics Fleet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/60 to-slate-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 -mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            24/7  Support
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4 drop-shadow-lg">
            Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">sex dream</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Whether you have questions about our services, need assistance, or want to discuss your specific requirements, our team is here to help. Reach out to us anytime!
          </p>
        </div>
      </div>

      {/* 2. FLOATING INFO CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 p-8 border-t-4 border-pink-600 transform transition-transform hover:-translate-y-2">
  
  <div className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 mb-6 shadow-sm">
    {/* Instagram Icon */}
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
    </svg>
  </div>

  <h3 className="text-xl font-bold text-slate-900 mb-2">Instagram</h3>

  <p className="text-slate-600 leading-relaxed font-medium mb-4">
    Follow us on Instagram for updates, offers, and latest posts.
  </p>

  <a 
    href="https://www.instagram.com/call_boy_serice__?igsh=azZ5MGgzazdpamt2" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center text-pink-600 font-semibold hover:underline"
  >
    all._types_of_services
  </a>

</div>

          {/* Card 2 */}
          {/* <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 p-8 border-t-4 border-blue-600 transform transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Dispatch Center</h3>
            <p className="text-slate-600 font-bold text-lg mb-1">+91 70106 88410</p>
          </div> */}

          {/* Card 3 */}
         <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 p-8 border-t-4 border-blue-500 transform transition-transform hover:-translate-y-2">
  
  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-sm">
    {/* Telegram Icon */}
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.993 15.672l-.396 3.936c.567 0 .813-.243 1.11-.534l2.664-2.55 5.52 4.032c1.014.558 1.734.264 2.016-.936l3.66-17.136h.001c.324-1.5-.54-2.088-1.53-1.716L1.68 9.504c-1.47.57-1.452 1.392-.252 1.764l5.88 1.836 13.644-8.604c.642-.426 1.224-.192.744.234"/>
    </svg>
  </div>

  <h3 className="text-xl font-bold text-slate-900 mb-2">Telegram</h3>

  <p className="text-slate-600 font-medium mb-4">
    Connect with us instantly on Telegram for quick support and updates.
  </p>

  <a 
    href="https://t.me/Rajhussain12" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center text-blue-500 font-semibold hover:underline"
  >
    @telegram
  </a>

</div>

        </div>
      </div>

      {/* 3. SPLIT SECTION: FORM & MAP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-1 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          
          {/* Left Side: Premium Form */}
          <div className="p-8 md:p-12 lg:pr-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Request a Quote</h2>
            <p className="text-slate-500 mb-8 font-medium">Fill out the details below and our logistics experts will get back to you immediately.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company / Name</label>
                  {/* ADDED name="name" */}
                  <input name="name" required type="text" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium" placeholder="Your Business Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  {/* ADDED name="phone" */}
                  <input name="phone" required type="tel" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium" placeholder="+91 XXXX XXXXX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                {/* ADDED name="email" */}
                <input name="email" required type="email" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium" placeholder="you@company.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Required for</label>
                <div className="relative">
                  {/* ADDED name="segment" */}
                  <select name="segment" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-bold text-slate-700 appearance-none cursor-pointer">
                    <option>hire a call boy</option>
                    <option>hire a call girl</option>
                    <option>join as call girl</option>
                    <option>join as call boy</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Cargo Specifications</label>
                {/* ADDED name="cargo" */}
                <textarea name="cargo" required rows="4" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium resize-none" placeholder="Describe your requirements..."></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg shadow-blue-600/30 text-lg uppercase tracking-wider"
                >
                  {formStatus === 'submitting' ? 'Processing...' : 'Submit ur dream life'}
                  {formStatus === 'success' ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Seamless Map */}
          

        </div>
      </div>
    </div>
  );
}