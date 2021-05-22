export default function StarHalfIcon({ style = {}, fillLeft, fillRight }: any) {
  return (
    <svg
      style={{ width: '1.2rem', height: '1.2rem', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
    >
      <g
        id="icon_star_rank-01"
        data-name="icon_star rank-01"
        transform="translate(0)"
      >
        <path
          fill={fillRight}
          d="M14,0l4.2,9.24,9.8,1.4-7,7.28L22.68,28,14,23.24,5.32,28,7,17.92,0,10.64l9.8-1.4Z"
        />
        <path
          fill={fillLeft}
          d="M13.937,0V23.24L5.3,28,6.968,17.92,0,10.64l9.756-1.4Z"
        />
      </g>
    </svg>
  )
}
