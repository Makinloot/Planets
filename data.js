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
    text: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. It is named after the Roman, messenger of the gods, Mercurius. Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core.',
    rotation: '59 days',
    orbital_period: '88 days',
    avg_temp: '167',
    diameter: '4880'
  },
  {
    name: 'venus',
    texture: venusAtmosphereTexture,
    prev: 'mercury',
    next: 'earth',
    text: 'Venus is the second planet from the Sun. It is sometimes called Earth\'s "sister" or "twin" planet as it is almost as large and has a similar composition. As an interior planet to Earth, Venus (like Mercury) appears in Earth\'s sky never far from the Sun, either as morning star or evening star. Aside from the Sun and Moon, Venus is the brightest natural object in Earth\'s sky, capable of casting visible shadows on Earth in dark conditions and being visible to the naked eye in broad daylight.',
    rotation: '243 days',
    orbital_period: '225 days',
    avg_temp: '464',
    diameter: '12,104'
  },
  {
    name: 'earth',
    texture: earthTexture,
    clouds: earthCloudsTexture,
    prev: 'venus',
    next: 'mars',
    text: 'Earth is the third planet from the Sun and the only place known in the universe where life has originated and found habitability. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. Approximately 70.8% of Earth\'s surface is made up of the ocean, dwarfing Earth\'s polar ice, lakes, and rivers. The remaining 29.2% of Earth\'s surface is land, consisting of continents and islands.',
    rotation: '24 hours',
    orbital_period: '365 days',
    avg_temp: '15',
    diameter: '12,742'
  },
  {
    name: 'mars',
    texture: marsTexture,
    prev: 'earth',
    next: 'jupiter',
    text: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, larger only than Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere and has a crust primarily composed of elements similar to Earth\'s crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. Mars has two small, irregularly shaped moons, Phobos and Deimos.',
    rotation: '24.6 hours',
    orbital_period: '687 days',
    avg_temp: '-65',
    diameter: '6,779'
  },
  {
    name: 'jupiter',
    texture: jupiterTexture,
    prev: 'mars',
    next: 'saturn',
    text: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth\'s night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion.',
    rotation: '10 hours',
    orbital_period: '12 years',
    avg_temp: '-110',
    diameter: '143,000'
  },
  {
    name: 'saturn',
    texture: saturnTexture,
    prev: 'jupiter',
    next: 'uranus',
    text: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. An electrical current within the metallic hydrogen layer is thought to give rise to Saturn\'s planetary magnetic field, which is weaker than Earth\'s, but which has a magnetic moment 580 times that of Earth due to Saturn\'s larger size.',
    rotation: '10.7 hours',
    orbital_period: '29 years',
    avg_temp: '-140',
    diameter: '116,460'
  },
  {
    name: 'uranus',
    texture: uranusTexture,
    prev: 'saturn',
    next: 'neptune',
    text: 'Uranus has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. The planet is similar in composition to Neptune, and both have bulk chemical compositions which differ from those of the other two giant planets, Jupiter and Saturn (the gas giants). For this reason, scientists often distinguish Uranus and Neptune as "ice giants". As with gas giants, ice giants lack a well-defined solid surface.',
    rotation: '17 hours',
    orbital_period: '84 years',
    avg_temp: '-195',
    diameter: '50,724'
  },
  {
    name: 'neptune',
    texture: neptuneTexture,
    prev: 'uranus',
    text: 'Neptune is the eighth planet from the Sun and the farthest known planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Being composed primarily of gases and liquids, it has no well-defined solid surface.',
    rotation: '19 hours',
    orbital_period: '165 years',
    avg_temp: '-200',
    diameter: '49,244'
  },
]

export default planetsData