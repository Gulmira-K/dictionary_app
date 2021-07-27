import './Meaning.css'
import Synonyms from '../synonyms/Synonyms'

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
            <li>
              <Synonyms synonyms={definition.synonyms} />
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default Meaning
