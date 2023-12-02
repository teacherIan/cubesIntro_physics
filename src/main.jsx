import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Canvas } from '@react-three/fiber';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
      shadows
      camera={{ position: [100, 100, 30], fov: 50, rotation: [0, 0, 0] }}
    >
      <App />
    </Canvas>
  </React.StrictMode>
);
