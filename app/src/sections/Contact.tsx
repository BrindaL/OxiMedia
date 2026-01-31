import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - CTA */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's bring your company to the next level.
            </h2>
            <p className="text-2xl md:text-3xl text-teal-300 font-light">
              Get in touch!
            </p>

            {/* Decorative element */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-transparent rounded-full"></div>
              <div className="w-8 h-1 bg-teal-400/50 rounded-full"></div>
              <div className="w-4 h-1 bg-teal-400/30 rounded-full"></div>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-gradient-to-br from-[#2a2a2a]/80 to-[#1f1f1f]/80 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
              {/* Phone */}
              <div className="flex items-center gap-6 mb-8 group">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-teal-400/30 transition-shadow duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href="tel:9731797318"
                    className="text-white text-xl md:text-2xl font-semibold hover:text-teal-300 transition-colors duration-300"
                  >
                    97317 97318
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6 mb-10 group">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-teal-400/30 transition-shadow duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:oximediaofficial@gmail.com"
                    className="text-white text-lg md:text-xl font-semibold hover:text-teal-300 transition-colors duration-300"
                  >
                    oximediaofficial@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-white/50 text-sm uppercase tracking-wider mb-6">Social</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/oximedia_agency?igsh=MXBzYTJ2NWswenl3bg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 hover:bg-teal-500/20 rounded-xl flex items-center justify-center border border-white/10 hover:border-teal-400/50 transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 text-white/70 group-hover:text-teal-300 transition-colors duration-300" />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-white tracking-tight">
                oxi<span className="text-teal-400">.</span>
              </p>
              <p className="text-white/40 text-sm mt-1">Digital Marketing Agency</p>
            </div>
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} OXI Media. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
