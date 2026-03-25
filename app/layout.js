import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

export const metadata = {
  title: 'The Math Catalysts | Weekend Math Tutoring',
  description: 'Live, interactive weekend math tutoring for Grade 10-12 students. Better marks for just R150/month.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-tmc-background font-body text-tmc-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}