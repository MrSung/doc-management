export const UserInput = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Create anonymous user</span>
      </label>
      <input
        type="text"
        placeholder="Type username here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  )
}
