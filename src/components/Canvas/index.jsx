import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Tshirt from '../Tshirt';

import '../../App.css';

import { useSelector } from 'react-redux';
const MainCanvas = () => {
  const texture = useSelector((state) => state.texture);
  const design = useSelector((state) => state.design);
  const part = useSelector((state) => state.part);

  return (
    <>
      <Canvas camera={{ position: [0, 7, 120], fov: 50 }}>
        <pointLight position={[25, 22, 45]} intensity={1} color={'#ffffff'} />
        <pointLight position={[25, 22, -45]} intensity={1} color={'#ffffff'} />
        <pointLight position={[-25, 22, 45]} intensity={1} color={'#ffffff'} />
        <pointLight position={[-25, 22, -45]} intensity={1} color={'#ffffff'} />
        <Suspense fallback={null}>
          <Tshirt texture={texture} design={design} part={part} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default MainCanvas;
