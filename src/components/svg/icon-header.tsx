export default function IconHeader({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="29"
      fill="currentColor"
      viewBox="0 0 34 29"
      className={className}
    >
      <g opacity="0.5">
        <path
          id="icon-header-fill"
          // fill="#ABD1FC"
          fill="currentColor"
          d="M12.5 28H9L1 14 9 1h9l-8 13 5.5 9zM24 1h-3l-3 4 5 9-8 14h9l8.5-14z"
        ></path>
        <path
          id="icon-header-stroke"
          // stroke="#ABD1FC"
          stroke="currentColor"
          d="M12.5 28H9L1 14 9 1h9l-8 13 5.5 9zM24 1h-3l-3 4 5 9-8 14h9l8.5-14z"
        ></path>
      </g>
    </svg>
  );
}
