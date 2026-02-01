import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Lightbulb, Rocket } from 'lucide-react';

const processSteps = [
  {
    title: 'CONSULTATION:',
    description:
      'Every great strategy begins with understanding — your goals, your audience, your ambition. We dive deep into discovery, turning insights into inspiration and objectives into opportunities. Because when we align with your vision, growth isn\'t just planned — it\'s inevitable.',
    icon: MessageSquare,
  },
  {
    title: 'STRATEGY DEVELOPMENT:',
    description:
      'Driven by data and inspired by creativity, we design custom strategies that unite SEO, PPC, social media, and content marketing — delivering impact that\'s not just seen, but felt.',
    icon: Lightbulb,
  },
  {
    title: 'IMPLEMENTATION:',
    description:
      'We execute every strategy with precision and creative flair — launching campaigns that spark connection, inspire engagement, and leave a lasting impression on your audience.',
    icon: Rocket,
  },
];

const OurProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#3a3a3a] py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-teal-300 text-lg md:text-xl tracking-widest uppercase">
            EFFICIENT WORKFLOW
          </p>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-white/70 text-base md:text-lg">
              Our process involves a strategic blend of creativity and analytics to deliver
              tailored marketing solutions that drive results.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-[#3a3a3a]/80 to-[#2a2a2a]/80 rounded-2xl p-8 border border-white/10 hover:border-teal-400/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-teal-400/30 transition-shadow duration-500">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-teal-300 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Connector line for desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-teal-400/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
