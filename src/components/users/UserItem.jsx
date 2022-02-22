import React from "react"
import { Link } from "react-router-dom"

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="profile" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link to={`/user/${login}`} className="opacity-40 text-base-content">
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserItem
