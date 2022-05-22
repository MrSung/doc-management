import type { ReactElement, FC } from 'react'

type Props = {
  children: ReactElement
}

export const DefaultTemplate: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto">{children}</div>
    </div>
  )
}
