import App from './App';
import './index.css';
import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import Lobby from '../src/lobby/Lobby';

export default function Layout() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? (
        <Lobby />
      ) : (
        <Canvas
          onPointerDown={() => setLoaded(true)}
          shadows
          camera={{
            position: [100, 120, 50],
            fov: 50,
            rotation: [0, 0, 0],
            near: 1,
          }}
        >
          <App />
        </Canvas>
      )}
    </>
  );
}
