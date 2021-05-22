export default function TimeIcon(props: any) {
  const { fill = 'white', width = 24, height = 24 } = props
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...{ width, height }}
    >
      <g
        opacity={0.3}
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          clipRule="evenodd"
          d="M21.5 12.25a9.25 9.25 0 01-9.25 9.25A9.25 9.25 0 013 12.25 9.25 9.25 0 0112.25 3a9.25 9.25 0 019.25 9.25z"
        />
        <path d="M15.682 15.192l-3.77-2.249V8.096" />
      </g>
    </svg>
  )
}
