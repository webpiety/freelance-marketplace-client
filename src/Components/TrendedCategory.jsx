import React, { useRef } from "react";

const TrendedCategory = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-gray-900 animate-pulse text-center">
          Trending Job Category
        </h2>
      </div>
      <div></div>
      <div className="flex justify-center w-full">
        <div className="relative w-full max-w-[1300px]">
          <div className="relative overflow-hidden">
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {/* Card 1 */}
              <div className="flex-shrink-0 w-64 h-80 sm:w-56 md:w-60 lg:w-64 rounded-2xl shadow-md overflow-hidden relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://i.ibb.co/7xqpJDks/DM.jpg')",
                  }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Content */}
                <div className="relative p-6 flex flex-col justify-between h-full text-white">
                  <h3 className="font-semibold mb-2 text-primary text-center text-2xl">
                    Digital Marketing
                  </h3>

                  {/* Bottom Section */}
                  <div className="flex justify-between mt-auto">
                    <div className="bg-accent rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        502 Jobs
                      </p>
                    </div>
                    <div className="bg-primary rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        Explore More...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-64 h-80 sm:w-56 md:w-60 lg:w-64 rounded-2xl shadow-md overflow-hidden relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/TML9MJCY/web.jpg')",
                  }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Content */}
                <div className="relative p-6 flex flex-col justify-between h-full text-white">
                  <h3 className="font-semibold mb-2 text-primary text-center text-2xl">
                    Web Development
                  </h3>

                  {/* Bottom Section */}
                  <div className="flex justify-between mt-auto">
                    <div className="bg-accent rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        289 Jobs
                      </p>
                    </div>
                    <div className="bg-primary rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        Explore More...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-64 h-80 sm:w-56 md:w-60 lg:w-64 rounded-2xl shadow-md overflow-hidden relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/k6S1sxfL/2564.jpg')",
                  }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Content */}
                <div className="relative p-6 flex flex-col justify-between h-full text-white">
                  <h3 className="font-semibold mb-2 text-primary text-center text-2xl">
                    Graphic Designer
                  </h3>

                  {/* Bottom Section */}
                  <div className="flex justify-between mt-auto">
                    <div className="bg-accent rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        544 Jobs
                      </p>
                    </div>
                    <div className="bg-primary rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        Explore More...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-64 h-80 sm:w-56 md:w-60 lg:w-64 rounded-2xl shadow-md overflow-hidden relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/5Xb4gqfL/BackEnd.jpg')",
                  }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Content */}
                <div className="relative p-6 flex flex-col justify-between h-full text-white">
                  <h3 className="font-semibold mb-2 text-primary text-center text-2xl">
                    Backend Developer
                  </h3>

                  {/* Bottom Section */}
                  <div className="flex justify-between mt-auto">
                    <div className="bg-accent rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        657 Jobs
                      </p>
                    </div>
                    <div className="bg-primary rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        Explore More...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-64 h-80 sm:w-56 md:w-60 lg:w-64 rounded-2xl shadow-md overflow-hidden relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/ycjh6mHc/Mobile-development.jpg')",
                  }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Content */}
                <div className="relative p-6 flex flex-col justify-between h-full text-white">
                  <h3 className="font-semibold mb-2 text-primary text-center text-2xl">
                    Mobile App Development
                  </h3>

                  {/* Bottom Section */}
                  <div className="flex justify-between mt-auto">
                    <div className="bg-accent rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        777 Jobs
                      </p>
                    </div>
                    <div className="bg-primary rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        Explore More...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-64 h-80 sm:w-56 md:w-60 lg:w-64 rounded-2xl shadow-md overflow-hidden relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/k6QRRGdy/5757453.jpg')",
                  }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Content */}
                <div className="relative p-6 flex flex-col justify-between h-full text-white">
                  <h3 className="font-semibold mb-2 text-primary text-center text-2xl">
                    UI/UX Designer
                  </h3>

                  {/* Bottom Section */}
                  <div className="flex justify-between mt-auto">
                    <div className="bg-accent rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        105 Jobs
                      </p>
                    </div>
                    <div className="bg-primary rounded-2xl px-3 py-1">
                      <p className="text-white/90 text-center text-sm">
                        Explore More...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Arrow Inside */}
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-primary text-black rounded-full w-10 h-10 flex items-center justify-center z-10"
            >
              &lt;
            </button>

            {/* Right Arrow Inside */}
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-primary text-black rounded-full w-10 h-10 flex items-center justify-center z-10"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendedCategory;
