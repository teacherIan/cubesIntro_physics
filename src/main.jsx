import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Canvas } from '@react-three/fiber';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
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
  </React.StrictMode>
);
