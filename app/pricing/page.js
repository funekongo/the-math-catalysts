import Link from 'next/link';

export const metadata = {
  title: 'Pricing | The Math Catalyst',
  description: 'Simple, affordable pricing. Get full access to our weekend math tutoring for just R150/month.',
};

const includedFeatures = [
  'Up to 16 hours of tutoring per month',
  '2 x 2-hour sessions every weekend (Sat & Sun)',
  'Live, interactive Google Meet classes',
  'Expert guidance for Grades 10-12',
  'Cancel your subscription anytime',
];

export default function PricingPage() {
  return (
    <div className="bg-tmc-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-tmc-primary">
            Simple, Straightforward Pricing
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-tmc-text/80 mt-4">
            One plan, one price. Everything you need to boost your math marks.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-tmc-accent">
          <div className="p-8 md:p-10">
            <h2 className="font-heading text-center text-2xl font-bold text-tmc-primary">
              Weekend Warrior Plan
            </h2>
            
            <div className="text-center my-6">
              <span className="font-heading text-6xl font-bold text-tmc-primary">R150</span>
              <span className="text-xl font-semibold text-tmc-text/70">/month</span>
            </div>

            <p className="text-center text-tmc-text/80 mb-8">
              A flat, affordable subscription for consistent, high-quality math tutoring every weekend.
            </p>

            <Link
              href="#" // This will eventually link to the payment gateway
              className="block w-full bg-tmc-accent text-tmc-primary font-heading font-bold text-lg text-center px-8 py-4 rounded-full hover:bg-tmc-accent/90 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Sign Up & Pay
            </Link>
          </div>

          <div className="bg-gray-50 p-8 md:p-10 border-t border-gray-200">
            <h3 className="font-heading text-lg font-bold text-tmc-primary mb-4">What's Included:</h3>
            <ul className="space-y-3">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-tmc-text/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
            <p className="text-sm text-tmc-text/60">
                Payments are processed securely. You can manage or cancel your subscription at any time.
            </p>
        </div>

      </div>
    </div>
  );
}