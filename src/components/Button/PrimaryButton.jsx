import React from "react";

export default function PrimaryButton() {
  return (
    <button className="relative w-full h-[69px] flex items-center justify-center mt-[39px]">
      <div className="absolute top-0 left-0 z-10">
        <svg
          width="280"
          height="69"
          viewBox="0 0 280 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_ii_10506_79)">
            <path
              d="M266.295 0.466387C101.968 -0.155485 178.032 -0.155451 13.7049 0.46642C8.26959 0.48745 3.08057 3.77781 2.35468 7.81359C-0.784912 25.3544 -0.784912 42.8952 2.35468 60.4368C3.08057 64.4726 8.26959 67.7626 13.7049 67.7836C178.032 68.4055 101.968 68.4054 266.295 67.7836C271.73 67.7625 276.919 64.4725 277.644 60.4368C280.785 42.8952 280.785 25.3544 277.644 7.81355C276.919 3.77778 271.73 0.487416 266.295 0.466387Z"
              fill="url(#paint0_linear_10506_79)"
            />
            <path
              d="M266.295 0.466387C101.968 -0.155485 178.032 -0.155451 13.7049 0.46642C8.26959 0.48745 3.08057 3.77781 2.35468 7.81359C-0.784912 25.3544 -0.784912 42.8952 2.35468 60.4368C3.08057 64.4726 8.26959 67.7626 13.7049 67.7836C178.032 68.4055 101.968 68.4054 266.295 67.7836C271.73 67.7625 276.919 64.4725 277.644 60.4368C280.785 42.8952 280.785 25.3544 277.644 7.81355C276.919 3.77778 271.73 0.487416 266.295 0.466387Z"
              fill="url(#paint1_linear_10506_79)"
              fillOpacity="0.39"
            />
          </g>
          <defs>
            <filter
              id="filter0_ii_10506_79"
              x="0"
              y="0"
              width="299"
              height="70.25"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="19" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_10506_79"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_10506_79"
                result="effect2_innerShadow_10506_79"
              />
            </filter>
            <linearGradient
              id="paint0_linear_10506_79"
              x1="44.7018"
              y1="-28.5034"
              x2="272.328"
              y2="72.7316"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8A00" />
              <stop offset="1" stopColor="#C96508" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_10506_79"
              x1="-47.4753"
              y1="56.6805"
              x2="296.945"
              y2="-48.8373"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.432292" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h3 className="text-base font-bold text-center uppercase text-[#171b20] z-20 relative">
        выбрать
      </h3>
      ;
    </button>
  );
}
