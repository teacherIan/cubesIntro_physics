import App from './App';
import './index.css';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Lobby from './Lobby/Lobby';

export default function Layout() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? (
        <Lobby />
      ) : (
        <Canvas
          onClick={() => setLoaded(true)}
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
