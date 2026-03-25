import Link from 'next/link';

export const metadata = {
  title: 'How It Works | The Math Catalysts',
  description: 'A simple, step-by-step guide to joining our weekend math tutoring sessions.',
};

// Reusable component for each step
const Step = ({ number, title, description }) => (
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-tmc-accent rounded-full text-tmc-primary font-heading font-bold text-2xl md:text-3xl shadow-md">
      {number}
    </div>
    <div>
      <h3 className="font-heading text-xl md:text-2xl font-bold text-tmc-primary mb-2">{title}</h3>
      <p className="text-tmc-text/80 text-base md:text-lg">{description}</p>
    </div>
  </div>
);

export default function HowItWorksPage() {
  return (
    <div className="bg-tmc-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-tmc-primary">
            Your Journey to Better Marks in 4 Simple Steps
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-tmc-text/80 mt-4">
            We've made it incredibly simple to get started. Follow these steps and join us this weekend!
          </p>
        </div>

        <div className="space-y-10 md:space-y-12">
          <Step
            number="1"
            title="Message Us on WhatsApp"
            description="Send a message to the general channel in The Math Catalysts community group. We'll arrange everything from there."
          />
          <Step
            number="2"
            title="Receive Your Google Meet Link"
            description="Once we've arranged everything, you'll receive a recurring Google Meet link. This single link is your key to all sessions, every weekend."
          />
          <Step
            number="3"
            title="Join the Live Sessions"
            description="Every Saturday and Sunday, use your link to join the live 2-hour session. Bring your questions, homework, and a willingness to learn!"
          />
          <Step
            number="4"
            title="Ask, Understand, and Improve"
            description="Participate in the interactive sessions, get real-time explanations, and watch your understanding and your marks improve week after week."
          />
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/pricing"
            className="inline-block bg-tmc-accent text-tmc-primary font-heading font-bold text-lg px-8 py-3 rounded-full hover:bg-tmc-accent/90 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
}