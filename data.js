import mercTexture from './src/assets/textures/mercury.jpg'
import venusTexture from './src/assets/textures/venus.jpg'
import venusAtmosphereTexture from './src/assets/textures/venus-atmosphere.jpg'
import earthTexture from './src/assets/textures/earth.jpg'
import earthCloudsTexture from './src/assets/textures/earth-clouds.jpg'
import marsTexture from './src/assets/textures/mars.jpg'
import jupiterTexture from './src/assets/textures/jupiter.jpg'
import saturnTexture from './src/assets/textures/saturn.jpg'
import uranusTexture from './src/assets/textures/uranus.jpg'
import neptuneTexture from './src/assets/textures/neptune.jpg'

const planetsData = [
  {
    name: 'mercury',
    texture: mercTexture,
    next: 'venus',
  },
  {
    name: 'venus',
    texture: venusAtmosphereTexture,
    prev: 'mercury',
    next: 'earth',
  },
  {
    name: 'earth',
    texture: earthTexture,
    clouds: earthCloudsTexture,
    prev: 'venus',
    next: 'mars',
  },
  {
    name: 'mars',
    texture: marsTexture,
    prev: 'earth',
    next: 'jupiter'
  },
  {
    name: 'jupiter',
    texture: jupiterTexture,
    prev: 'mars',
    next: 'saturn',
  },
  {
    name: 'saturn',
    texture: saturnTexture,
    prev: 'jupiter',
    next: 'uranus',
  },
  {
    name: 'uranus',
    texture: uranusTexture,
    prev: 'saturn',
    next: 'neptune',
  },
  {
    name: 'neptune',
    texture: neptuneTexture,
    prev: 'uranus'
  },
]

export default planetsData