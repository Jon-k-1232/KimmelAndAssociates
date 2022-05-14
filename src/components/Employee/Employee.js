import React from "react"

export default function Employee({ image, imageAlt, name, position }) {
  return (
    <div className="employee">
      <img src={image} alt={imageAlt} />
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  )
}
