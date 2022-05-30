import type { ReactNode, FC } from 'react'

type Props = {
  children: ReactNode
}

export const DefaultTemplate: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 pb-8 mx-auto">{children}</div>
    </div>
  )
}
