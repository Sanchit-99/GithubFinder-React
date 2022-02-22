import React from "react"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div class="container mx-auto">
        <div className="px-2 mx-2">
          <FaGithub className="inline text-3xl pr-2" />
          <Link to={"/"} className="align-middle font-bold text-lg">
            {title}
          </Link>
        </div>

        <div className="flex-1">
          <div className="flex justify-end">
            <Link to={"/"} className="btn btn-ghost rounded-btn btn-sm">
              Home
            </Link>
            <Link to={"/about"} className="btn btn-ghost rounded-btn btn-sm">
              About
            </Link>
          </div>
        </div>

      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Github Finder",
}

export default Navbar
