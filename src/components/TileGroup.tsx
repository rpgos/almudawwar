interface TileGroupProps {
  children: React.ReactNode[]
}

function TileGroup({ children }: TileGroupProps) {
  return <div className="grid is-col-min-12 is-gap-3 is-flex-grow-1">
    {children}
  </div>
}

export default TileGroup
