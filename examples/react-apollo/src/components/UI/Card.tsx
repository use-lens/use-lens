import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'

type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Card: FC<PropsWithChildren & CardProps> = ({ children, ...otherProps }) => {
  const { className, ...otherAttributes } = otherProps
  return (
    <div
      className={clsx(
        'block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md',
        className,
      )}
      {...otherAttributes}
    >
      {children}
    </div>
  )
}
