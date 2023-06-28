import React, { Suspense } from 'react';
import { Ground } from './Ground';
import { Canvas } from '@react-three/fiber';
import "./style.css";
import { OrbitControls, PerspectiveCamera, useGLTF, Environment} from '@react-three/drei';

function CarShow(){
  const guit = useGLTF("./Guitar-Case.glb");
  const wood = useGLTF("./wooden.glb");
  // const electric = useGLTF("./electric.glb");
  return(
    <>
    <OrbitControls  target={[0, 0.35, 0]} maxPolarAngle={1.45}  />
    <primitive object={guit.scene} position-y={-0.1} position-z={1} scale={0.4} />
    <primitive object={wood.scene} position-x={-1.6} scale={0.5} />
    {/* <primitive object={electric.scene} scale={0.5} /> */}
    <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
    <color args={[0, 0, 0]} attach="background" />
    <Environment preset={"city"} />
    <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
       <Ground />
       
    </>
  )
}
function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;