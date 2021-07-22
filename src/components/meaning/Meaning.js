import React from 'react'

const Meaning = ({ partOfSpeech, definitions }) => {
  console.log(partOfSpeech)
  console.log(definitions)

  return (
    <div>
      <h5>{partOfSpeech}</h5>
      {definitions.map((definition, i) => {
        console.log(definition)
        return (
          <ul key={i}>
            <li>
              <strong>Definition:</strong> {definition.definition}
            </li>
            <li>
             <strong>Example:</strong> {definition.example}
            </li>
            {definition.synonyms.length
              ? <li>
                  <strong>Synonyms:</strong> {definition.synonyms}
                </li>
              : null
            }

          </ul>
        )
      })}
    </div>
  )
}

export default Meaning
