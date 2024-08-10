import React from "react";

const FloatingSVGs = () => {
  return (
    <div className="absolute inset-0">
      {/* Floating Circle 1 */}
      <div className="absolute top-5 left-5 w-[10vw] h-[10vw] sm:w-[12vw] sm:h-[12vw] md:w-[8vw] md:h-[8vw] lg:w-[6vw] lg:h-[6vw] xl:w-[5vw] xl:h-[5vw]">
        <svg
          className="absolute opacity-75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" fill="rgba(0, 200, 257, 0.1)" />
          <circle cx="12" cy="12" r="7" fill="rgba(0, 200, 255, 0.2)" />
          <circle cx="12" cy="12" r="4" fill="rgba(0, 200, 255, 0.3)" />
        </svg>
      </div>

      {/* Floating Circle 2 */}
      <div className="absolute top-20 right-5 w-[12vw] h-[12vw] sm:w-[14vw] sm:h-[14vw] md:w-[10vw] md:h-[10vw] lg:w-[8vw] lg:h-[8vw] xl:w-[6vw] xl:h-[6vw]">
        <svg
          className="absolute opacity-75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" fill="rgba(255, 105, 180, 0.1)" />
          <circle cx="12" cy="12" r="7" fill="rgba(255, 105, 180, 0.2)" />
          <circle cx="12" cy="12" r="4" fill="rgba(255, 105, 180, 0.3)" />
        </svg>
      </div>

      {/* Floating Circle 3 */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[14vw] h-[14vw] sm:w-[16vw] sm:h-[16vw] md:w-[12vw] md:h-[12vw] lg:w-[10vw] lg:h-[10vw] xl:w-[8vw] xl:h-[8vw]">
        <svg
          className="absolute opacity-75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" fill="rgba(0, 255, 0, 0.1)" />
          <circle cx="12" cy="12" r="7" fill="rgba(0, 255, 0, 0.2)" />
          <circle cx="12" cy="12" r="4" fill="rgba(0, 255, 0, 0.3)" />
        </svg>
      </div>

      {/* Floating Square 1 */}
      <div className="absolute top-1/4 left-1/4 w-[12vw] h-[12vw] sm:w-[14vw] sm:h-[14vw] md:w-[10vw] md:h-[10vw] lg:w-[8vw] lg:h-[8vw] xl:w-[6vw] xl:h-[6vw]">
        <svg
          className="absolute opacity-75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            fill="rgba(255, 105, 180, 0.1)"
          />
          <rect
            x="6"
            y="6"
            width="12"
            height="12"
            fill="rgba(255, 105, 180, 0.2)"
          />
          <rect
            x="8"
            y="8"
            width="8"
            height="8"
            fill="rgba(255, 105, 180, 0.3)"
          />
        </svg>
      </div>

      {/* Floating Square 2 */}
      <div className="absolute bottom-1/4 left-1/1 w-[14vw] h-[14vw] sm:w-[16vw] sm:h-[16vw] md:w-[12vw] md:h-[12vw] lg:w-[10vw] lg:h-[10vw] xl:w-[8vw] xl:h-[8vw]">
        <svg
          className="absolute opacity-75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            fill="rgba(0, 0, 255, 0.1)"
          />
          <rect
            x="6"
            y="6"
            width="12"
            height="12"
            fill="rgba(0, 0, 255, 0.2)"
          />
          <rect x="8" y="8" width="8" height="8" fill="rgba(0, 0, 255, 0.3)" />
        </svg>
      </div>

      {/* Floating Square 3 */}
      <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 w-[10vw] h-[10vw] sm:w-[12vw] sm:h-[12vw] md:w-[8vw] md:h-[8vw] lg:w-[6vw] lg:h-[6vw] xl:w-[5vw] xl:h-[5vw]">
        <svg
          className="absolute opacity-75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            fill="rgba(255, 165, 0, 0.1)"
          />
          <rect
            x="6"
            y="6"
            width="12"
            height="12"
            fill="rgba(255, 165, 0, 0.2)"
          />
          <rect
            x="8"
            y="8"
            width="8"
            height="8"
            fill="rgba(255, 165, 0, 0.3)"
          />
        </svg>
      </div>
    </div>
  );
};

export default FloatingSVGs;
