import React from "react"
import { Link } from "gatsby"

export default function ServiceItem({
  image,
  imageAlt,
  label,
  labelDetail,
  link,
}) {
  return (
    <div className="serviceContainer">
      <img src={image} alt={imageAlt} id="serviceItemImage" />
      <h3>{label}</h3>
      <p>{labelDetail}</p>
      <p>
        <Link to={link}>Learn More</Link>
      </p>
    </div>
  )
}
