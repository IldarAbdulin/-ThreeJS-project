import React from 'react';
import { Canvas, ThreeElements } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

type ComputersProps = {
  isMobile: boolean;
} & ThreeElements['mesh'];

const Computers: React.FC<ComputersProps> = ({ isMobile, ...rest }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh {...rest}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQuery = (e: any) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuery);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <React.Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </React.Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
