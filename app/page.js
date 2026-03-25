import Link from 'next/link';
import Image from 'next/image';

// Reusable component for feature steps
const FeatureStep = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-tmc-accent/10 rounded-full flex items-center justify-center mb-4">
      <span className="text-3xl">{icon}</span>
    </div>
    <h3 className="font-heading text-xl font-bold text-tmc-primary mb-2">{title}</h3>
    <p className="text-tmc-text/80 max-w-xs">{description}</p>
  </div>
);

// Reusable component for testimonial cards
const TestimonialCard = ({ quote, author, grade }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200/80">
    <p className="font-body text-tmc-text/90 italic mb-4">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-tmc-primary flex items-center justify-center text-white font-bold mr-3">
        {author.charAt(0)}
      </div>
      <div>
        <p className="font-heading font-bold text-tmc-primary">{author}</p>
        <p className="text-sm text-tmc-text/70">{grade}</p>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-tmc-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-white">
            Better marks. <span className="text-amber">Every weekend.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-8">
            Live math tutoring for Grades 10-12. Join live Google Meet sessions every Saturday and Sunday for just R150 a month.
          </p>
          <Link
            href="/pricing"
            className="inline-block bg-tmc-accent text-tmc-primary font-heading font-bold text-lg px-8 py-3 rounded-full hover:bg-tmc-accent/90 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-tmc-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-tmc-primary">How It Works</h2>
            <p className="max-w-xl mx-auto text-lg text-tmc-text/80 mt-2">
              Getting top-tier math help has never been easier.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <FeatureStep
              icon="1️⃣"
              title="Sign Up & Pay"
              description="Create your account and complete the simple, secure R150 monthly payment."
            />
            <FeatureStep
              icon="2️⃣"
              title="Get Your Link"
              description="You'll receive a recurring Google Meet link for all weekend sessions."
            />
            <FeatureStep
              icon="3️⃣"
              title="Join & Learn"
              description="Log in every Saturday and Sunday for your 2-hour interactive tutoring session."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-tmc-primary">Loved by Students & Parents</h2>
             <p className="max-w-xl mx-auto text-lg text-tmc-text/80 mt-2">
              See what others are saying about The Math Catalysts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The weekend sessions are a game-changer. I can finally ask questions without feeling rushed."
              author=""
              grade="Grade 11 Student (Grade 10-12)"
            />
            <TestimonialCard
              quote="My daughter's confidence in math has soared. The R150 is the best money I've ever spent on extra lessons."
              author="Sarah P."
              grade="Parent"
            />
          </div>
        </div>
      </section>
    </div>
  );
}