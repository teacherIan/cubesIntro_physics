import './index.css';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  RenderTexture,
  OrbitControls,
  PerspectiveCamera,
  Text,
  ContactShadows,
  RoundedBox,
  Plane,
  Box,
  Image,
} from '@react-three/drei';
import { suspend } from 'suspend-react';
import { Perf } from 'r3f-perf';
import inter from './assets/inter_regular.woff';
import {
  Physics,
  RigidBody,
  InstancedRigidBodies,
  CuboidCollider,
} from '@react-three/rapier';
import InstancedRigidBodiesCreator from './InstancedRigidBodiesCreator';
import Light from './Light';

export default function App() {
  // const { width: w, height: h } = useThree((state) => state.viewport)

  const [counter, setCounter] = useState(0);
  const [textRefA, setTextRefA] = useState('Welcome');

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      console.log(counter);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <Physics gravity={[0, -10, 0]}>
        <ambientLight intensity={0.5} />

        <Light x={-150} y={200} z={0} />
        <Light x={0} y={200} z={150} />
        <Light x={150} y={200} z={0} />
        <Light x={0} y={200} z={-150} />

        <RigidBody type="fixed">
          <CuboidCollider args={[50, 500, 2]} position={[0, 0, 50.5]} />
          <CuboidCollider args={[50, 500, 2]} position={[0, 0, -50.5]} />
          <CuboidCollider args={[2, 500, 50]} position={[50.5, 0, 0]} />
          <CuboidCollider args={[2, 500, 50]} position={[-50.5, 0, 0]} />
        </RigidBody>

        <InstancedRigidBodiesCreator
          cubesCount={50}
          text={counter < 25 ? 'WELCOME' : 'CLICK'}
          width={11}
          backgroundColorYellow={false}
          height={11}
          fontSize={0.9}
        />

        {counter > 3 ? (
          <InstancedRigidBodiesCreator
            cubesCount={40}
            text={
              counter < 25 ? 'HANGZHOU INTERNATIONAL SCHOOL' : 'CLICK TO START'
            }
            width={34}
            backgroundColorYellow={true}
            height={7}
            fontSize={1.2}
          />
        ) : null}

        <RigidBody restitution={1} type="fixed" position={[0, -1, 0]}>
          <Box receiveShadow args={[1000, 1, 1000]}>
            <meshStandardMaterial color={'#4A6E96'} />
          </Box>
        </RigidBody>

        {counter > 6 ? (
          <InstancedRigidBodiesCreator
            cubesCount={40}
            text={counter < 25 ? 'LOADING' : 'START'}
            width={10}
            backgroundColorYellow={false}
            height={8}
          />
        ) : null}

        {counter > 9 ? (
          <InstancedRigidBodiesCreator
            cubesCount={100}
            text={counter < 25 ? counter.toString().toUpperCase() + '%' : 'TO'}
            width={6}
            backgroundColorYellow={true}
            height={6}
            fontSize={2.1}
          />
        ) : null}
      </Physics>

      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
}
