import './App.css'

import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useControls } from 'leva'
import { TextureLoader } from 'three'

import normal from './assets/block-glass-normal-2.jpg'
import revelatio from './assets/revelatio.png'


function App() {

  const normalTexture = useLoader(TextureLoader, normal)
  const revelatioTexture = useLoader(TextureLoader, revelatio)
  const materialProps = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.06, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 1.50, min: 0, max: 2, step: 0.01 },
    distortionScale: { value: 1.60, min: 0.01, max: 2, step: 0.01 },
    temporalDistortion: { value: 0.10, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
  })

  return (
    <div className='canvas-container'>
      <Canvas camera={{ manual: false }}>
        {/* <Environment background = {true} preset='city'/> */}
        {/* <ambientLight intensity={1.0} />
        <directionalLight color="red" position={[0, 0, 5]} /> */}
        <OrbitControls autoRotateSpeed={0.05} makeDefault />

        <mesh>
          <planeGeometry args={[17, 8, 16, 32,]} />
          <meshBasicMaterial map={revelatioTexture}/>
        </mesh>

        <mesh rotation-x={0}>
          <planeGeometry args={[17, 8, 16, 32,]} />
          <MeshTransmissionMaterial {...materialProps} chromaticAberration={0}/>
        </mesh>

      </Canvas>

      <h1>revelatio</h1>
    </div>
  )
}

export default App
