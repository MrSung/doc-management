type TableRowProps = {
  index: number
  directoryName: string
  filename?: string
  authorName: string
  onClickDeleteButton: () => void
}

export const TableRow = ({
  index,
  directoryName,
  filename,
  authorName,
  onClickDeleteButton,
}: TableRowProps) => (
  <tr>
    <th>{index + 1}</th>
    <td>{directoryName}/</td>
    {typeof filename !== 'undefined' && <td>{filename}</td>}
    <td>{authorName}</td>
    <td>
      <button
        type="button"
        onClick={onClickDeleteButton}
        className="btn btn-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </td>
  </tr>
)
