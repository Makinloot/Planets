import Planet from "./Planet"

const Planets = ({ map }) => {
  return (
    <>
      <pointLight color="#f6f3ea" position={[6, 1, 6]} intensity={1.2} />
      <Planet map={map} />
    </>
  )
}

export default Planets