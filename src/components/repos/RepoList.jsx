import React from "react"
import RepoItem from "./RepoItem"

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <div className="card-title text-3xl font-bold my-4">
          Latest Repositories
        </div>
        {repos.map((repo) => {
          return <RepoItem key={repo.id} repo={repo} />
        })}
      </div>
    </div>
  )
}

export default RepoList
