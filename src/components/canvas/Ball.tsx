import React from 'react';
import { Canvas, ThreeElements } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

type BallProps = {
  props: any;
} & ThreeElements['mesh'];

const Ball = ({ props }: BallProps) => {
  const [decal] = useTexture([props]);
  return (
    <Float {...props} speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

type BallCanvasProps = {
  icon: any;
};

const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <React.Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball props={icon} />
      </React.Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
