import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | The Math Catalyst',
  description: 'Learn about our passion for teaching, our interactive approach, and why weekend tutoring works for Grade 10-12 students.',
};

export default function AboutPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-tmc-primary">
            More Than Just a Tutor.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-tmc-text/80 mt-4">
            We are your weekend partner in mastering mathematics.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-56 md:h-72 w-full">
            {/* Placeholder for an image of the tutor or a relevant graphic */}
            <div className="absolute inset-0 bg-tmc-primary flex items-center justify-center">
               <span className="text-tmc-accent text-4xl font-heading">TMC</span>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-tmc-primary mb-4">
              A Passion for Making Math Click
            </h2>
            <div className="prose prose-lg max-w-none text-tmc-text/90">
              <p>
                The Math Catalyst was founded on a simple belief: any student can excel at math with the right guidance and a supportive environment. Our founder, a passionate and experienced math educator, grew tired of seeing students feel anxious or left behind in crowded classrooms. The goal was to create a space where asking questions is encouraged, mistakes are learning opportunities, and concepts are explored until they truly 'click'.
              </p>
              
              <h3 className="font-heading text-xl font-bold text-tmc-primary mt-8 mb-2">
                Our Teaching Approach: Live & Interactive
              </h3>
              <p>
                We don't do pre-recorded videos or boring worksheets. Our entire approach is built around live, interactive sessions on Google Meet. This allows for real-time questions, personalized explanations, and a collaborative learning atmosphere. We tackle problems together, break down complex topics, and focus on the "why" behind the formulas, not just memorization.
              </p>

              <h3 className="font-heading text-xl font-bold text-tmc-primary mt-8 mb-2">
                Why Weekends Work
              </h3>
              <p>
                Weekends provide the perfect opportunity for focused, uninterrupted learning. Free from the pressures of a busy school week, students can dedicate quality time to strengthening their math skills. Our 2-hour sessions are designed to be intensive yet manageable, providing a consistent and effective boost to your learning routine every single week.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/how-it-works"
                className="inline-block bg-tmc-accent text-tmc-primary font-heading font-bold text-lg px-8 py-3 rounded-full hover:bg-tmc-accent/90 hover:scale-105 transition-all duration-200 shadow-lg"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}