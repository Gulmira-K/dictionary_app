import './Meaning.css'

const Meaning = ({ partOfSpeech, definitions }) => {

  return (
    <div className='Meaning'>
      <h6 className='Menaing-partOfSpeech'><em>{partOfSpeech}</em></h6>
      {definitions.map((definition, i) => {
        console.log(definition)
        return (
          <ul key={i}>
            <li>
              <strong>Definition: </strong>{definition.definition}
            </li>
            {definition.example
              ? <li>
                  <strong>Example: </strong>"{definition.example}"
                </li>
              : null
            }
           {definition.synonyms.length
              ? <li>
                <strong>Synonyms: </strong>
                {definition.synonyms.map((synonym, i) => {
                  return <span key={i}>{synonym}, </span>
                })}
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
