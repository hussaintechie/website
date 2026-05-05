import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Join as Call Boy in Chennai | High Income Male Escort Jobs",
  description:
    "Looking for call boy jobs in Chennai? Join a professional companionship service with flexible work, secure support, and high earning opportunities.",
  keywords: [
     'hire call boy Chennai',
    'hire call boy ',
    'call boy in Chennai',
    'call boy jobs Chennai',
    'need call boy Chennai',
    'join call boy service',
    'male escort jobs Chennai',
    'call boy opportunities',
    'high income call boy jobs',
    'Chennai companionship jobs',
    'professional male escort Chennai',
    'part-time call boy jobs Chennai'
  ],
  authors: [{ name: "call boy" }],
  robots: "index, follow",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "call boy",
    description:
      "Looking for call boy jobs in Chennai? Join a professional companionship service with flexible work, secure support, and high earning opportunities.",
    url: "https://callboy.website",
    siteName: "Call Boy",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://callboy.website/favicon.ico", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Call Boy - Join as",
      },
    ],
  },
  other: {
  "geo.region": "IN-TN",
  "geo.placename": "Chennai",
  "geo.position": "13.0827;80.2707",
  "ICBM": "13.0827, 80.2707",
},

  alternates: {
    canonical: "https://callboy.website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}