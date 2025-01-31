import { createContext, useState } from "react"
import useSound from 'use-sound'
import daydreaming from "../assets/sounds/Daydreaming.mp3";
import { PlayerContextType } from "../@types/player";

export const PlayerContext = createContext<PlayerContextType | null>(null)

export const PlayerContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { pause }] = useSound(daydreaming, {
    loop: true
  })

  return (
    <PlayerContext.Provider value={{ isPlaying, setIsPlaying, play, pause }}>
      {children}
    </PlayerContext.Provider>
  )
}
