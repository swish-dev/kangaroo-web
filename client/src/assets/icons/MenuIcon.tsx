export default function MenuIcon(props: any) {
  const { fill = 'white', width = 24, height = 24 } = props
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...{ width, height }}
    >
      <path
        d="M.879 7.77h21.937a.88.88 0 00.891-.88.89.89 0 00-.89-.89H.878A.88.88 0 000 6.89a.87.87 0 00.879.88zm0 5.109h21.937a.88.88 0 00.891-.879.893.893 0 00-.89-.902H.878A.883.883 0 000 12a.87.87 0 00.879.879zm0 5.121h21.937c.493 0 .891-.398.891-.902a.88.88 0 00-.89-.88H.878a.87.87 0 00-.879.88c0 .504.387.902.879.902z"
        fill={fill}
      />
    </svg>
  )
}
