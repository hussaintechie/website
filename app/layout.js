import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Join as Call Boy in Chennai | High Income Male Escort Jobs',
  description: 'Looking for call boy jobs in Chennai? Join a professional companionship service with flexible work, secure support, and high earning opportunities.',
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}