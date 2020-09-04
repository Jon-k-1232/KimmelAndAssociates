import React from "react"
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
        <Link to="/">Home</Link>
    </div>
  )
}
