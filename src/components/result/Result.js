import './Result.css'
import Meaning from '../meaning/Meaning'

const Result = ({data}) => {

  if (Object.keys(data).length) {
    return (
      <div className='Result'>
        <h3 className='Result-word'>{data.word}</h3>
        {data.meanings.map((meaning, i) => {
          return (
            <Meaning key={i} partOfSpeech={meaning.partOfSpeech} definitions={meaning.definitions} />
          )
        })}
      </div>
    )
  } else {
    return null
  }
}

export default Result
