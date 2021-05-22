export default function BackIcon(props: any) {
  const { fill = 'white', width = 24, height = 24 } = props
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...{ width, height }}
    >
      <path
        d="M8 11.6c0 .307.117.57.366.812l5.618 5.493a.962.962 0 00.71.293 1.017 1.017 0 00.704-1.758l-4.974-4.848 4.974-4.834A1.018 1.018 0 0014.695 5a.962.962 0 00-.711.293l-5.618 5.493A1.104 1.104 0 008 11.6z"
        fill={fill}
      />
    </svg>
  )
}
