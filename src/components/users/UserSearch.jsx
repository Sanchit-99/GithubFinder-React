import { clear } from "@testing-library/user-event/dist/clear"
import React, { useContext } from "react"
import { useState } from "react"
import AlertContext from "../../context/alert/AlertContext"
import GithubContext from "../../context/github/GithubContext"

function UserSearch() {
  const [text, setText] = useState("")
  const { users, searchUsers, clearUsers } = useContext(GithubContext)
  const { alert, setAlert } = useContext(AlertContext)
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === "") {
      setAlert("Please Enter Something", "error")
    } else {
      searchUsers(text)
      setText("")
    }
  }
  
  const handleClear = () => {
    clearUsers()
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-3 mb-5">
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            value={text}
            name=""
            id=""
            className="input pr-40 input-lg w-full bg-gray-200 text-black"
          />
          <button
            type="submit"
            className="btn btn-lg absolute right-0 top-0 rounded-l-none"
          >
            Search
          </button>
        </form>
      </div>
      {users.length > 0 && (
        <div className="my-auto">
          <button className="btn btn-ghost" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
