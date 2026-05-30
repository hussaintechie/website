import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "Join as Call Boy in Chennai | High Income Male Escort Jobs",
  description:
    "Looking for call boy jobs in Chennai? Join a professional companionship service with flexible work, secure support, and high earning opportunities.",
  keywords: [
     'hire call girl Chennai',
    'hire call girl ',
  
    'call girl in Chennai',
  
    'call girl jobs Chennai',
   
    'need call girl Chennai',
  
    'join call girl service',
    'male escort jobs Chennai',
    'female escort jobs Chennai',
    'call boy opportunities',
    'call girl opportunities',
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
   
      </body>
    </html>
  );
}