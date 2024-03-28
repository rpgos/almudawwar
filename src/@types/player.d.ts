export type PlayerContextType = {
  isPlaying: boolean
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  play: () => void
  pause: () => void
}
