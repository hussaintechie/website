// import React from 'react';
// import Link from 'next/link';

// export const metadata = {
//   title: 'Join as Call Girl',
//   description: 'Join our professional companionship service today and enjoy flexible work with high earning potential and secure support.',
// };

// const lcvVehicles = [
//   {
//     id: 1,
//     name: "Join as Call Girl",

// description: `
// Your dream girl could be here! ❤️
// Join our agency, meet amazing girls, and enjoy unforgettable moments. 🔥

// its was an Real picture of our girls, and u will atten service by that girl`,
//     specs: { length: "14 ft", width: "6.5 ft", height: "6.0 ft", payload: "3 Tons" },
//     image: "/serviceimage/callgirl.jpg", 
//   },
//   // {
//   //   id: 2,
//   //   name: "EICHER 1090",
//   //   service: "Heavy Regional Logistics",
//   //   description: "The versatile workhorse of the LCV segment. Engineered to handle heavier payloads with superior stability, making it ideal for agricultural produce, textiles, and medium machinery transport.",
//   //   specs: { length: "17 ft", width: "6.5 ft", height: "6.0 ft", payload: "5 Tons" },
//   //   image: "/serviceimage/g8.jpg", 
//   // },
//   // {
//   //   id: 3,
//   //   name: "EICHER 1110",
//   //   service: "High-Volume Cargo Transport",
//   //   description: "The heavy-lifter of our Light Commercial fleet, offering expansive cargo space for maximum volume. Best suited for long-haul distribution and specialized goods. (Note: Higher variants are also available upon request).",
//   //   specs: { length: "19 - 20 ft", width: "7.0 ft", height: "6.0 ft", payload: "7 Tons" },
//   //   image: "/serviceimage/g9.jpg", 
//   // }
// ];

// export default function LCVSegmentPage() {
//   return (
//     <div className="min-h-screen bg-[#f8f9fa] pt-20 pb-24 font-sans">
      
//       {/* Corporate Page Header */}
//       <div className="relative bg-slate-900 border-b border-gray-200 shadow-sm mb-20 overflow-hidden">
//   {/* Background Image Wrapper */}
//   <div className="absolute inset-0 z-0">
//     <img 
//       src="/banner/test.png" 
//       alt="HCV Heavy Haulage Transport Background" 
//       className="w-full h-full object-cover"
//     />
//     {/* Deep Industrial Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/60 to-slate-900/60"></div>
//   </div>

//   {/* Content Layer */}
//   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
    
//     <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
//     Join as Call <span className="text-[#fe0000]">Girl</span> 
//     </h1>
//     <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
//       Become part of our trusted companionship network and enjoy high earning potential
//     </p>
//   </div>
// </div>
//       {/* Alternating Layout */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
//         {lcvVehicles.map((vehicle, index) => {
//           const isEven = index % 2 === 0;
          
//           return (
//             <div 
//               key={vehicle.id} 
//               className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
//                 !isEven ? 'lg:flex-row-reverse' : ''
//               }`}
//             >
//               {/* Image Section */}
//               <div className="w-full lg:w-1/2">
//                 <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 bg-white p-2 group">
//                   <div className="rounded-xl overflow-hidden bg-gray-50 relative aspect-[4/3]">
//                      <img 
//                         src={vehicle.image} 
//                         alt={vehicle.name} 
//                         className="object-cover w-full h-full mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
//                       />
//                   </div>
//                 </div>
//               </div>

//               {/* Text & Details Section */}
//               <div className="w-full lg:w-1/2 flex flex-col justify-center">
                
//                 {/* Badge & Title */}
//                 <div className="mb-6">
//                   {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0000fe]/10 text-[#0000fe] font-semibold text-xs tracking-wider uppercase mb-4">
//                     Payload: {vehicle.specs.payload}
//                   </div> */}
//                   <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-2">
//                     {vehicle.name}
//                   </h2>
//                   {/* <h3 className="text-lg font-medium text-gray-500 flex items-center">
//                     <svg className="w-5 h-5 mr-2 text-[#fe0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
//                     {vehicle.service}
//                   </h3> */}
//                 </div>
                
//                 {/* Description */}
//                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                   {vehicle.description}
//                 </p>

//                 {/* Professional Data Grid */}
//                 {/* <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
//                   <h4 className="text-sm font-bold text-[#000000] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
//                     Technical Specifications
//                   </h4>
//                   <div className="grid grid-cols-3 gap-6">
//                     <div>
//                       <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Length</span>
//                       <span className="block text-xl font-bold text-[#0000fe]">{vehicle.specs.length}</span>
//                     </div>
//                     <div>
//                       <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Width</span>
//                       <span className="block text-xl font-bold text-[#0000fe]">{vehicle.specs.width}</span>
//                     </div>
//                     <div>
//                       <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Height</span>
//                       <span className="block text-xl font-bold text-[#0000fe]">{vehicle.specs.height}</span>
//                     </div>
//                   </div>
//                 </div> */}

//                 {/* Corporate Call to Action */}
//                 <div className="flex items-center gap-6 flex-wrap">
  
//   <Link 
//     href="/contact" 
//     className="inline-flex items-center justify-center bg-[#fe0000] text-white px-8 py-3.5 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:bg-[#cc0000] hover:shadow-lg"
//   >
//     Request a Quote
//     <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//     </svg>
//   </Link>

//   {/* Telegram */}
//   <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 shadow-sm">
//    <a 
//   href="https://t.me/Rajhussain12" 
//   target="_blank" 
//   rel="noopener noreferrer"
//   className="inline-flex"
// >
//   <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 shadow-sm hover:bg-blue-100 transition">
//     <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M9.993 15.672l-.396 3.936c.567 0 .813-.243 1.11-.534l2.664-2.55 5.52 4.032c1.014.558 1.734.264 2.016-.936l3.66-17.136h.001c.324-1.5-.54-2.088-1.53-1.716L1.68 9.504c-1.47.57-1.452 1.392-.252 1.764l5.88 1.836 13.644-8.604c.642-.426 1.224-.192.744.234"/>
//     </svg>
//   </div>
// </a>
    
//   </div>

//   {/* Instagram */}
//   {/* <div className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 shadow-sm">
//     <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
//     </svg>
//   </div> */}

//   {/* Instagram Text */}
//   {/* <div>
//     <h3 className="text-xl font-bold text-slate-900">Instagram</h3>
//     <a 
//       href="https://www.instagram.com/call_boy_serice__?igsh=azZ5MGgzazdpamt2" 
//       target="_blank" 
//       rel="noopener noreferrer"
//       className="text-pink-600 font-semibold hover:underline"
//     >
//       all._types_of_services
//     </a>
//   </div> */
// //   <div>
// //   <h3 className="text-xl font-bold text-slate-900">Contact</h3>

// //   {/* Phone */}
// //   <a
// //     href="tel:+919876543210"
// //     className="block text-blue-600 font-semibold hover:underline"
// //   >
// //     📞 +91 98765 43210
// //   </a>

// //   {/* WhatsApp */}
// //   <a
// //     href="https://wa.me/919876543210"
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     className="block text-green-600 font-semibold hover:underline"
// //   >
// //     💬 WhatsApp
// //   </a>
// // </div>


  
//   }

// </div>

//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }




import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'LCV Fleet | Light Commercial Vehicles',
  description: 'Explore our Light Commercial Vehicle fleet — EICHER trucks built for regional logistics, heavy haulage, and high-volume cargo transport.',
};

const lcvVehicles = [
  {
    id: 1,
    name: "EICHER 1049",
    service: "Regional Logistics",
    description:
      "Built for the daily grind of city and regional delivery. Compact enough to navigate tight urban routes, with enough payload capacity to keep your logistics chain moving without wasted trips.",
    specs: { length: "14 ft", width: "6.5 ft", height: "6.0 ft", payload: "3 Tons" },
    image: "/serviceimage/g7.jpg",
  },
  {
    id: 2,
    name: "EICHER 1090",
    service: "Heavy Regional Logistics",
    description:
      "The versatile workhorse of the LCV segment. Engineered to handle heavier payloads with superior stability, making it ideal for agricultural produce, textiles, and medium machinery transport.",
    specs: { length: "17 ft", width: "6.5 ft", height: "6.0 ft", payload: "5 Tons" },
    image: "/serviceimage/g8.jpg",
  },
  {
    id: 3,
    name: "EICHER 1110",
    service: "High-Volume Cargo Transport",
    description:
      "The heavy-lifter of our Light Commercial fleet, offering expansive cargo space for maximum volume. Best suited for long-haul distribution and specialized goods. Higher variants available upon request.",
    specs: { length: "19–20 ft", width: "7.0 ft", height: "6.0 ft", payload: "7 Tons" },
    image: "/serviceimage/g9.jpg",
  },
];

export default function LCVSegmentPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F3] pb-24 font-[Inter,system-ui,sans-serif]">

      {/* Header */}
      <div className="relative bg-[#111820] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/banner/test.png"
            alt="LCV fleet operating at a regional distribution yard"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111820]/70 via-[#111820]/85 to-[#111820]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-20">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-[#E8730C] font-mono text-sm tracking-tight">LCV Segment</span>
            <span className="h-px flex-1 bg-white/15" />
          </div>
          <h1 className="font-[Oswald,sans-serif] uppercase text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[0.95] max-w-2xl">
            Built to move what your business runs on
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mt-5 leading-relaxed">
            Three EICHER models, each sized for a different job — from daily
            city rounds to long-haul, high-volume freight.
          </p>
        </div>
      </div>

      {/* Vehicle list */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-20 space-y-20">
        {lcvVehicles.map((vehicle, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={vehicle.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-14 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-[46%] flex-shrink-0">
                <div className="relative rounded-md overflow-hidden bg-white border border-slate-200">
                  <div className="relative aspect-[4/3] bg-slate-50">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="object-cover w-full h-full mix-blend-multiply"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-[#111820] text-white text-xs font-mono px-2.5 py-1 rounded-sm">
                    {vehicle.specs.payload} payload
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-[54%] flex flex-col justify-center">
                <span className="text-[#E8730C] text-sm font-medium mb-2">
                  {vehicle.service}
                </span>
                <h2 className="font-[Oswald,sans-serif] uppercase text-3xl md:text-4xl font-semibold text-[#111820] mb-4 tracking-tight">
                  {vehicle.name}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-[58ch]">
                  {vehicle.description}
                </p>

                {/* Spec sheet */}
                <div className="border border-slate-200 rounded-md bg-white mb-8 max-w-md">
                  <div className="grid grid-cols-4 divide-x divide-slate-200">
                    {[
                      ['Length', vehicle.specs.length],
                      ['Width', vehicle.specs.width],
                      ['Height', vehicle.specs.height],
                      ['Payload', vehicle.specs.payload],
                    ].map(([label, value]) => (
                      <div key={label} className="px-4 py-3">
                        <div className="text-xs text-slate-500 mb-1">{label}</div>
                        <div className="text-sm font-semibold text-[#111820]">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#111820] text-white px-7 py-3 rounded-md font-medium transition-colors duration-200 hover:bg-[#1E293B]"
                  >
                    Request a quote
                  </Link>

                  <a
                    href="https://t.me/Rajhussain12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-[#111820] transition-colors duration-200 px-3 py-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.993 15.672l-.396 3.936c.567 0 .813-.243 1.11-.534l2.664-2.55 5.52 4.032c1.014.558 1.734.264 2.016-.936l3.66-17.136h.001c.324-1.5-.54-2.088-1.53-1.716L1.68 9.504c-1.47.57-1.452 1.392-.252 1.764l5.88 1.836 13.644-8.604c.642-.426 1.224-.192.744.234" />
                    </svg>
                    Chat on Telegram
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}