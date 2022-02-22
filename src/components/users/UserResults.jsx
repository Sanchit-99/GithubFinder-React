import React, { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import Spinner from "../layouts/Spinner"
import UserItem from "./UserItem"

function UserResults() {
  
  const { users, loading } = useContext(GithubContext)

  if (!loading) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />
        })}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
