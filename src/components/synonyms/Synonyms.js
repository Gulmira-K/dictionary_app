import React from 'react'

const Synonyms = ({ synonyms }) => {
  console.log(!synonyms)
  if (!synonyms.length) {
    return null
  } else {
    return (
     <div>
        <strong>Synonyms: </strong> {synonyms}   
      </div>
    )
  }

}

export default Synonyms
