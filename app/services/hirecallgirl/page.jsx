import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'LCV Fleet | Light Commercial Vehicles',
  description: 'Explore our Light Commercial Vehicle fleet — EICHER trucks built for regional logistics, heavy haulage, and high-volume cargo transport.',
};

const whyChooseUs = [
  {
    title: "Fun",
    detail: "A friendly environment and get an experince like girlfriend.",
  },
  {
    title: "Enjoyment",
    detail: "We focus on creating a comfortable and enjoyable experience for both clients and employees...",
  },
  {
    title: "Affordable pricing",
    detail: "We offer Best pricing  and friendly girl.",
  },
  {
    title: "Dream fulfillment",
    detail: "Make your dreams come true with our exceptional service and enjoy any type of postion .",
  },
];

const pricingPlans = [
  {
    name: "Short time ",
    price: "₹2,500",
    unit: "1 shot",
    description: "enjoy ur dream with us",
    features: ["Well Educated", "Look like model", "Available 24/7"],
  },
  {
    name: "Full Day /Night",
    price: "12000",
    unit: "/ day",
  description: "enjoy ur dream with us",
     features: ["Well Educated", "Look like model", "Available 24/7"],
    highlighted: true,
  },
 
];

const lcvVehicles = [
  {
    id: 1,
    name: "clg girl",
   
    description:
      "Very sexy and hot girl, she is very friendly and well educated, she is available for full night and day, she is very good looking and model type girl. upload image as Real girl Service will get that girl",
    specs: { Color: "fair", Weight: "50 kG", height: "5.0 ft" ,Size:"32 inch"},
    image: "/serviceimage/callgirl.jpg",
  },
  {
    id: 2,
    name: "House Wife ",
 
    description:
      "Very sexy and hot girl, she is very friendly and well educated, she is available for full night and day, she is very good looking and model type girl.upload image as Real girl Service will get that girl",
    specs: { Color: "fair", Weight: "55", height: "5.0 Kg" ,Size:"34 inch"},
    image: "/serviceimage/callgirl.jpg",
  },
  {
    id: 3,
    name: "Model Girl",
  
    description:
      "Very sexy and hot girl, she is very friendly and well educated, she is available for full night and day, she is very good looking and model type girl.upload image as Real girl Service will get that girl",
      specs: { Color: "19–20 ft", Weight: "55 Kg", height: "6.0 ft",Size:"36 inch" },
    image: "/serviceimage/callgirl.jpg",
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
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111820]/70 via-[#111820]/85 to-[#111820]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-20">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-[#E8730C] font-mono text-sm tracking-tight">Dream Girl</span>
            <span className="h-px flex-1 bg-white/15" />
          </div>
          <h1 className="font-[Oswald,sans-serif] uppercase text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[0.95] max-w-2xl">
           fullfill ur dream with us
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mt-5 leading-relaxed">
            Live Your Sex Dream Life with Our Call Girl
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
                    {vehicle.specs.Size} 
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
                      ['Color', vehicle.specs.Color],
                      ['Weight', vehicle.specs.Weight],
                      ['Height', vehicle.specs.height],
                      ['Size', vehicle.specs.Size],
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
    href="tel:+919940940156"
    className="inline-flex items-center justify-center bg-[#111820] text-white px-7 py-3 rounded-md font-medium transition-colors duration-200 hover:bg-[#1E293B]"
  >
    Call now
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

      {/* Why choose us */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-28">
        <div className="flex items-baseline gap-4 mb-10">
          <h2 className="font-[Oswald,sans-serif] uppercase text-3xl md:text-4xl font-semibold text-[#111820] tracking-tight">
            Why  choose Us
          </h2>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="border-l-2 border-[#E8730C] pl-5">
              <h3 className="text-lg font-semibold text-[#111820] mb-1.5">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-[52ch]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-28">
        <div className="flex items-baseline gap-4 mb-10">
          <h2 className="font-[Oswald,sans-serif] uppercase text-3xl md:text-4xl font-semibold text-[#111820] tracking-tight">
            Hire pricing
          </h2>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-md p-7 flex flex-col ${
                plan.highlighted
                  ? 'bg-[#111820] text-white'
                  : 'bg-white border border-slate-200 text-[#111820]'
              }`}
            >
              <span
                className={`text-sm font-medium mb-4 ${
                  plan.highlighted ? 'text-[#E8730C]' : 'text-[#E8730C]'
                }`}
              >
                {plan.name}
              </span>

              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="text-3xl font-semibold">{plan.price}</span>
                <span className={plan.highlighted ? 'text-slate-300 text-sm' : 'text-slate-500 text-sm'}>
                  {plan.unit}
                </span>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-[#E8730C]' : 'text-[#E8730C]'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

                <Link
    href="tel:+919940940156"
    className="inline-flex items-center justify-center bg-[#111820] text-white px-7 py-3 rounded-md font-medium transition-colors duration-200 hover:bg-[#1E293B]"
  >
    Call Now
                  </Link>
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-500 mt-6">
          Rates vary by Model size and distance. Contact us for an exact Rate.
        </p>
      </div>
    </div>
  );
}