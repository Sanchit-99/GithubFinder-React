import React from "react"
import loading from "../../assets/loading.gif"

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={50}
        src={loading}
        alt="Loading..."
        className="mx-auto text-center"
      />
    </div>
  )
}

export default Spinner
