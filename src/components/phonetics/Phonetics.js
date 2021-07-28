import { useRef } from 'react'
import './Phonetics.css'

const Phonetics = ({ phonetics }) => {
  const audioPlayer = useRef();
  
  if (phonetics.length) {
    const text = phonetics[0].text,
          audio = phonetics[0].oxford_audio;   

    const play = () => {
      audioPlayer.current.play()
    }

    return (
      <div className='phonetics'>
        <i className="fas fa-volume-up soundIcon" onClick={play}><audio src={audio} ref={audioPlayer}></audio></i>
        <p className='phoneticsText'>[{text}]</p>
      </div>
    )

  } else {
    return null
  }

}

export default Phonetics
