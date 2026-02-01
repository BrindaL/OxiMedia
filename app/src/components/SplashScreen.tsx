import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    return () => clearTimeout(skipTimer);
  }, []);

  const handleVideoEnd = () => {
    onComplete();
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
          muted
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none"></div>

        {/* Skip Button */}
        {showSkip && (
          <button
            onClick={handleSkip}
            className="absolute top-8 right-8 z-10 flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300 group"
          >
            <span className="text-sm font-medium">Skip</span>
            <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
          </button>
        )}

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-8 h-1 bg-white/40 rounded-full animate-pulse"></div>
          <div className="w-8 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
