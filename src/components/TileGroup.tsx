interface TileGroupProps {
  children: React.ReactNode[]
}

function TileGroup({ children }: TileGroupProps) {
  return <div className="tile is-ancestor">
    {children}
  </div>
}

export default TileGroup
