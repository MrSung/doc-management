export const CreateDocumentForm = () => {
  return (
    <div className="form-control grid gap-4 grid-rows-2 grid-cols-4 w-full max-w-2xl mt-8">
      <label className="label col-start-1 col-end-5 row-start-1 row-end-2">
        <span className="label-text">Create document</span>
      </label>
      <input
        type="text"
        placeholder="Type directory tree path (slashed delemeted text)"
        className="input input-bordered col-start-1 col-end-5 w-full"
      />
      <input
        type="text"
        placeholder="Type document filename"
        className="input input-bordered col-start-1 col-end-4 w-full"
      />
      <button type="button" className="btn btn-primary">
        Create
      </button>
    </div>
  )
}
