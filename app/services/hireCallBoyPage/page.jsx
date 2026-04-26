import React from 'react';
import Link from 'next/link';
import { Weight } from 'lucide-react';

export const metadata = {
  title: 'hire an call boy',
  description: 'Hire your perfect partner today and enjoy a satisfying, memorable, and premium companionship experience.',
};

const hireCallBoy = [
  {
    id: 1,
    name: "",
    service: "hire an call boy",
    description: "Hire your perfect partner and step into an experience filled with comfort, connection, and pure satisfaction",
    specs: { height: "6 ft", Weight: "70kg", height: "7.0 ft" },
    image: "/serviceimage/hirecallboy.jpg", 
  },
  // {
  //   id: 2,
  //   name: "HAULAGE TRUCK (12 Wheel Taurus)",
  //   service: "High-Capacity Industrial Haulage",
  //   description: "The ultimate heavy-duty 12-wheel transporter offering an upgraded payload capacity. Perfect for large-scale industrial cargo, heavy machinery components, and intensive supply chain logistics.",
  //   specs: { length: "24 ft", width: "7.0 ft", height: "7.0 ft", payload: "25 Tons" },
  //   image: "/serviceimage/g5.jpg", 
  // },
  // {
  //   id: 3,
  //   name: "HAULAGE TRUCK (14 Wheel Taurus)",
  //   service: "Extreme Payload Transport",
  //   description: "Our highest-capacity multi-axle haulage truck. Built for extreme payloads and maximum volume, this 14-wheel powerhouse handles the most demanding heavy industry and infrastructure project transport across the country.",
  //   specs: { length: "26 ft", width: "7.0 ft", height: "7.0 ft", payload: "30 Tons" },
  //   image: "/serviceimage/g6.jpg", 
  // }
];

export default function hireCallBoyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-20 pb-24 font-sans">
      
      {/* Corporate Page Header */}
      <div className="relative bg-slate-900 border-b border-gray-200 shadow-sm mb-20 overflow-hidden">
  {/* Background Image Wrapper */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/banner/test.png" 
      alt="HCV Heavy Haulage Transport Background" 
      className="w-full h-full object-cover"
    />
    {/* Deep Industrial Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/60 to-slate-900/60"></div>
  </div>

  {/* Content Layer */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
    
    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
      hire an  <span className="text-[#fe0000]">call boy </span> 
    </h1>
    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
      Hire ur partner AND get satisfied and have a great experience with us..
    </p>
  </div>
</div>

      {/* Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {hireCallBoy.map((vehicle, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={vehicle.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 bg-white p-2 group">
                  <div className="rounded-xl overflow-hidden bg-gray-50 relative aspect-[4/3]">
                     <img 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        className="object-cover w-full h-full mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                      />
                  </div>
                </div>
              </div>

              {/* Text & Details Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                
                {/* Badges & Title */}
                <div className="mb-6">
                  {/* <div className="flex flex-wrap gap-3 mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0000fe]/10 text-[#0000fe] font-bold text-xs tracking-wider uppercase">
                      Payload: {vehicle.specs.payload}
                    </div>
                  </div> */}
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-2">
                    {vehicle.name}
                  </h2>
                  <h3 className="text-lg font-medium text-gray-500 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#fe0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {vehicle.service}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {vehicle.description}
                </p>

                {/* Professional Data Grid */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
                  <h4 className="text-sm font-bold text-[#000000] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                    call boy Details
                  </h4>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Length</span>
                      <span className="block text-xl font-bold text-[#0000fe]">{vehicle.specs.height}</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Width</span>
                      <span className="block text-xl font-bold text-[#0000fe]">{vehicle.specs.Weight}</span>
                    </div>
                   
                  </div>
                </div>

                {/* Corporate Call to Action */}
               <div className="flex items-center gap-6 flex-wrap">
  
  <Link 
    href="/contact" 
    className="inline-flex items-center justify-center bg-[#fe0000] text-white px-8 py-3.5 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:bg-[#cc0000] hover:shadow-lg"
  >
    Request a Quote
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </Link>

  {/* Telegram */}
  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 shadow-sm">
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.993 15.672l-.396 3.936c.567 0 .813-.243 1.11-.534l2.664-2.55 5.52 4.032c1.014.558 1.734.264 2.016-.936l3.66-17.136h.001c.324-1.5-.54-2.088-1.53-1.716L1.68 9.504c-1.47.57-1.452 1.392-.252 1.764l5.88 1.836 13.644-8.604c.642-.426 1.224-.192.744.234"/>
    </svg>
  </div>

  {/* Instagram */}
  <div className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 shadow-sm">
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
    </svg>
  </div>

  {/* Instagram Text */}
  <div>
    <h3 className="text-xl font-bold text-slate-900">Instagram</h3>
    <a 
      href="https://www.instagram.com/all._type_of_service?igsh=MTlsN2JzYjU0OXl4cg==" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-pink-600 font-semibold hover:underline"
    >
      all._types_of_services
    </a>
  </div>

</div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}