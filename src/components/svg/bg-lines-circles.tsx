interface Props {
  className?: string;
}
export default function SvgBgLinesCircles({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="706"
      height="684"
      fill="none"
      viewBox="0 0 706 684"
      className={`absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      <g id="lines-circles">
        <g
          id="shadow-blur"
          className="animate-shadow-blur"
          style={{ fillOpacity: 0 }}
          filter="url(#filter0_f_64_18)"
          opacity="0.5"
        >
          <ellipse cx="353" cy="342" fill="#272E3E" rx="203" ry="192"></ellipse>
        </g>
        <path
          id="line-top-right"
          className="animate-show-lines opacity-0"
          stroke="#272E3E"
          d="m363.646 328.57 91.924-91.924"
        ></path>
        <path
          id="line-bottom-left"
          className="animate-show-lines opacity-0"
          stroke="#272E3E"
          d="m249.646 442.57 91.924-91.924"
        ></path>
        <path
          id="line-top-left"
          className="animate-show-lines opacity-0"
          stroke="#272E3E"
          d="m250.354 236.646 91.923 91.924"
        ></path>
        <path
          id="line-bottom-right"
          className="animate-show-lines opacity-0"
          stroke="#272E3E"
          d="m364.354 350.646 91.923 91.924"
        ></path>
        <circle
          id="circle-center"
          className="animate-circle-center"
          cx="6"
          cy="6"
          r="6"
          fill="#272E3E"
          transform="matrix(1 0 0 -1 347 348)"
        ></circle>
      </g>
      <defs>
        <filter
          id="filter0_f_64_18"
          width="706"
          height="684"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_64_18"
            stdDeviation="75"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}
