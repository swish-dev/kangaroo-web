import classNames from 'classnames'
import styles from './style.scss'

const cx = classNames.bind(styles)

interface Props {
  name: string
}

export default function SubSample({ name }: Props) {
  const isRed = true
  return (
    <div className="sample-body">
      <p className={cx({ isRed, isBlue: !isRed })}>{name}</p>
      <p className={cx({ isRed: !isRed, isBlue: isRed })}>{name}</p>
    </div>
  )
}
