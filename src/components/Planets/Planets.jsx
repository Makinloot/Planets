import { Stars } from "@react-three/drei"
import Planet from "./Planet"

const Planets = ({ map }) => {
  return (
    <>
      <pointLight color="#f6f3ea" position={[6, 1, 6]} intensity={1.2} />
      <Planet map={map} />
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />
    </>
  )
}

export default Planets