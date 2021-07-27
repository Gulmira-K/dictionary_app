import './Result.css'
import Meaning from '../meaning/Meaning'
import Phonetics from '../phonetics/Phonetics'

const Result = ({data}) => {
console.log(data)
  if (Object.keys(data).length) {
    return (
      <div className='Result'>
        <h3 className='Result-word'>{data.word}</h3>
        <Phonetics phonetics={data.phonetics}/>
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
