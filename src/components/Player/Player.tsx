import { useContext } from "react"
import { CiPlay1, CiPause1  } from "react-icons/ci";
import './player.scss'
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from '../../@types/player'

export default function Player() {
  const { isPlaying, setIsPlaying, play, pause } = useContext(PlayerContext) as PlayerContextType

  const handlePlay = () => {
    if(isPlaying) {
      pause()
      setIsPlaying(false)
    } else {
      play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="player">
      {
        isPlaying ? <CiPause1 onClick={handlePlay} /> : <CiPlay1 onClick={handlePlay} />
      }
    </div>
  )
}
