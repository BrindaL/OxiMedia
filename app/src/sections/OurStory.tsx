import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const OurStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showThumbnail, setShowThumbnail] = useState(true);

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

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
        setShowThumbnail(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowThumbnail(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#2a2a2a] via-[#3d3d3d] to-[#5a5a5a] py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Diagonal shape background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#4a4a4a]/80 to-[#3a3a3a]/60 transform -skew-y-3 rounded-3xl"></div>

            <div className="relative z-10 p-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-300 mb-6 tracking-wide">
                OUR STORY
              </h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                OXI media is a digital marketing agency dedicated to providing
                specialized online branding solutions and cutting-edge marketing
                strategies for small and mid-sized enterprises. With a team of
                innovative thinkers and analytical experts, we excel in SEO, PPC,
                social media campaigns, and content marketing, ensuring impactful
                outcomes for our clients.
              </p>
            </div>
          </div>

          {/* Right Content - Video Player */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black">
              {/* Video */}
              <video
                ref={videoRef}
                src={`${import.meta.env.BASE_URL}video2.mp4`}
                muted={isMuted}
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '9/16', maxHeight: '500px' }}
              />

              {/* Thumbnail / Play Button Overlay */}
              {showThumbnail && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button
                    onClick={togglePlay}
                    className="w-20 h-20 bg-teal-500 hover:bg-teal-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </button>
                </div>
              )}

              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" fill="white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  )}
                </button>

                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-teal-400/50 rounded-tr-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-teal-400/50 rounded-bl-2xl"></div>

            {/* Video label */}
            <div className="mt-4 text-center">
              <p className="text-white/60 text-sm">Watch to learn more about our services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
