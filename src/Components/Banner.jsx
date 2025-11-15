import React, { useState, useEffect, useRef } from "react";

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const [banner, setBanner] = useState([]);
  const [animate, setAnimate] = useState(false);

  const startSlider = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % banner.length);
        setAnimate(true);
      }, 200);
    }, 5000);
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    fetch("https://freelance-marketplace-server-six.vercel.app/banner")
      .then((res) => res.json())
      .then((data) => {
        setBanner(data);
        setAnimate(true);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (banner.length > 0) {
      startSlider();
      return () => stopSlider();
    }
  }, [banner]);

  return (
    <section
      className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      {banner.map((ban, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current
              ? "opacity-100 translate-y-0 z-10"
              : "opacity-0 translate-y-4 z-0"
          }`}
          style={{
            backgroundImage: `url(${ban.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0F172A]/70"></div>

          {index === current && (
            <div className="relative z-20 px-4 sm:px-6 md:px-10 max-w-3xl flex flex-col items-center justify-center h-full">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
                } animate-softPulse`}
              >
                {ban.heading}
              </h1>
              <p
                className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${
                  animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
                } animate-softPulseSlow`}
              >
                {ban.subheading}
              </p>
              <button
                className={`mt-6 sm:mt-8 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-md shadow-md text-sm sm:text-base md:text-lg transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
                  animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
                } animate-softGlow`}
              >
                {ban.button}
              </button>
            </div>
          )}
        </div>
      ))}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
        {banner.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#0ea5e9] scale-125" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
