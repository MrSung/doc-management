import type { ReactNode, FC } from 'react'
import { useAtom } from 'jotai'

import { isApiErrorAtom } from '@/store/app'
import { ErrorModal } from 'src/components/organisms/error-modal'

type Props = {
  children: ReactNode
}

export const DefaultTemplate: FC<Props> = ({ children }) => {
  const [isApiError] = useAtom(isApiErrorAtom)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="container px-4 pb-8 mx-auto">{children}</div>
      </div>
      <ErrorModal isOpen={isApiError} />
    </>
  )
}
