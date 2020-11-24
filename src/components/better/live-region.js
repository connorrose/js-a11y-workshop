import React, {useState, useRef} from "react"

const LiveRegion = () => {
  const [message, setMessage] = useState('Nothing here.')
  const inputRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault();
    setMessage(inputRef.current.value);
  }

  return (
    <>
    <div status="status">
      <p>
        {message}
      </p>
    </div>
    <form onSubmit={submitHandler}>
      <label>
        Enter text<br />
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">
        Start
      </button>
    </form>
    </>
  )
}

export default LiveRegion