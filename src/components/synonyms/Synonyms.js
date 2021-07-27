import React from 'react'

const Synonyms = ({ synonyms }) => {

  if (!synonyms.length) {
    return null
  } else {
    return (
     <div>
        <strong>Synonyms: </strong>
        {synonyms.map((synonym, i) => {
          return <span key={i}>{synonym}, </span>
        })}
      </div>
    )
  }

}

export default Synonyms
