import { useAtom } from 'jotai'

import { apiErrorAtom } from 'src/store/app'

type Props = {
  isOpen: boolean
}

export const ErrorModal = ({ isOpen }: Props) => {
  const [apiError] = useAtom(apiErrorAtom)

  return (
    <div
      className={`modal ${
        isOpen ? 'visible opacity-100 pointer-events-auto' : ''
      }`.trimEnd()}
    >
      <div className="modal-box relative">
        <label className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </label>
        <h3 className="text-lg font-bold">{apiError?.message}</h3>
        <p className="py-4">code: {apiError?.code}</p>
      </div>
    </div>
  )
}
