import { useState } from 'react'
import axios from 'axios'
import './Dictionary.css'
import Result from'../result/Result'

const Dictionary = () => {
  const [word, setWord] = useState(''),
        [data, setData] = useState({}),
        baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en-US/'
  
  const displayData = (data) => {
    setData(data[0])
  }
  
  const handleSearch = (e) => {
    e.preventDefault()
    axios.get(`${baseUrl}${word}`)
      .then(response => displayData(response.data))
      .catch(error => console.log(error))
  }

  const handleChange = (e) => {
    setWord(e.target.value)
  }

 
  return (
    <div className='Dictionary'>
      <form onSubmit={handleSearch}>
        <input type='search'placeholder='Enter a word...' autoFocus={true} onChange={handleChange}/>
      </form>
      <Result data={data} />
    </div>
  )
}

export default Dictionary
