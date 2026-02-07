import { useEffect, useRef, useState } from 'react';
import { Palette, Share2, UtensilsCrossed, TrendingUp, Plane, Search, Rocket } from 'lucide-react';

const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const services = [
  {
    title: 'Branding',
    description:
      'is about shaping how people see and feel about a brand. It begins with understanding the brand\'s story, audience, and goals, then creating a clear strategy that defines its purpose and personality. We design visuals and messaging that bring the brand to life — from logo and colours to tone and storytelling. Once launched, the brand is shared through campaigns and experiences that connect with people. In essence, branding turns a business into a name people trust, remember, and love.',
    icon: Palette,
    image: getImagePath('images/branding.jpeg'),
  },
  {
    title: 'Social media management',
    description:
      'is all about helping brands shine online. It starts with knowing the brand\'s story and audience, then creating content that feels real, looks great, and sparks conversation. We plan posts, designs visuals, and engages with followers to keep the brand active and authentic. By tracking results and staying on top of trends, we also help the brand to grow and connect with people in meaningful ways. In short, our agency turns your social media everyday posts into powerful moments that build trust and love for the brand.',
    icon: Share2,
    image: getImagePath('images/instagram.jpg'),
  },
  {
    title: 'F & B lifestyle launch campaigns',
    description:
      'are all about creating excitement and emotion around a brand\'s debut. OXI media shapes the brand\'s vibe, story, and audience, then brings it to life through visuals, content, events, and social media. The goal is to make people not just try the product. It\'s about turning a launch into a moment everyone wants to share and Savor.',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
  },
  {
    title: 'Web & social performance boosting',
    description:
      'is all about helping brands get noticed, engage audiences, and drive results online. It combines smart strategies, data-driven insights, and creative content to improve website traffic, social reach, and conversions. The goal is to turn every click, post, and campaign into measurable growth and stronger connections with the audience.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'Travel & Hospitality branding with impact',
    description:
      'is about creating memorable experiences that make a brand unforgettable. It combines storytelling, visuals, and guest-focused messaging to capture the essence of a destination or service. The goal is to connect emotionally with travellers, inspire exploration, and turn every interaction into a lasting impression.',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
  },
  {
    title: 'SEO service',
    description:
      'is all about making a brand easy to find online. It uses strategies like keyword optimization, content creation, and technical improvements to boost search rankings and attract the right audience. The goal is to increase website traffic, visibility, and engagement, turning searches into loyal customers.',
    icon: Search,
    image: getImagePath('images/google-ads.jpg'),
  },
  {
    title: 'Brand Launch & Brand Building',
    description:
      "At OXI Media, we don't just market brands — we build them from the ground up. From defining brand positioning and identity to crafting a strong visual language, we create a solid foundation that ensures consistency across all touchpoints. We manage the entire launch journey, including pre-launch strategy, content planning, promotions, influencer collaborations, and launch campaigns to drive strong awareness and recall from day one. Post-launch, we focus on structured marketing and performance-driven strategies to help brands grow and scale sustainably. Whether it's a café, restaurant, brewery, retail, or lifestyle brand, we work as your long-term brand partner — not just a marketing agency.",
    icon: Rocket,
    image: getImagePath('images/branding.png'),
  },
];

const Services = () => {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col">
              <span className="text-white/60 text-sm tracking-widest">O</span>
              <span className="text-white/60 text-sm tracking-widest">U</span>
              <span className="text-white/60 text-sm tracking-widest">R</span>
            </div>
            <div className="h-16 w-px bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-white/60 text-sm tracking-widest">S</span>
              <span className="text-white/60 text-sm tracking-widest">E</span>
              <span className="text-white/60 text-sm tracking-widest">R</span>
              <span className="text-white/60 text-sm tracking-widest">V</span>
              <span className="text-white/60 text-sm tracking-widest">I</span>
              <span className="text-white/60 text-sm tracking-widest">C</span>
              <span className="text-white/60 text-sm tracking-widest">E</span>
              <span className="text-white/60 text-sm tracking-widest">S</span>
              <span className="text-white/60 text-sm tracking-widest">:</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${index === services.length - 1 && services.length % 2 !== 0 ? 'lg:col-span-2 flex justify-center' : ''}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="relative bg-gradient-to-br from-[#2a2a2a]/90 to-[#1f1f1f]/90 rounded-2xl overflow-hidden border border-white/5 hover:border-teal-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 w-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-black/50">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a] via-transparent to-transparent"></div>

                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-teal-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-teal-300 mb-3 group-hover:text-teal-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
