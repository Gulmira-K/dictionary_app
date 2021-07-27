import React from 'react'

const Phonetics = ({ phonetics }) => {

  if (phonetics.length) {
    const text = phonetics[0].text,
      audio = phonetics[0].oxford_audio
    console.log(audio)
    return (
      <div>
        <a href={audio}>Listen</a>
        <p>{text}</p>
      </div>
    )
  } else {
    return null
  }

}

export default Phonetics
