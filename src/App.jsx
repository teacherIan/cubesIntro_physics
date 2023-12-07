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
  const wallSize = 120;

  const [counter, setCounter] = useState(0);
  const [textRefA, setTextRefA] = useState('Welcome');

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <Physics gravity={[0, -15, 0]}>
        <ambientLight intensity={0.4} />

        <Light x={-85} y={30} z={10} />
        <Light x={10} y={30} z={85} />
        <Light x={85} y={30} z={10} />
        {/* <Light x={0} y={30} z={-85} /> */}

        <RigidBody type="fixed">
          <CuboidCollider
            args={[wallSize, 500, 2]}
            position={[0, 0, wallSize]}
          />
          <CuboidCollider
            args={[wallSize, 500, 2]}
            position={[0, 0, -wallSize]}
          />
          <CuboidCollider
            args={[2, 500, wallSize]}
            position={[wallSize, 0, 0]}
          />
          <CuboidCollider
            args={[2, 500, wallSize]}
            position={[-wallSize, 0, 0]}
          />
        </RigidBody>

        <InstancedRigidBodiesCreator
          cubesCount={100}
          text={counter < 25 ? 'WELCOME' : 'CLICK'}
          width={11}
          backgroundColorYellow={false}
          height={11}
          fontSize={0.9}
        />

        {counter > 3 ? (
          <InstancedRigidBodiesCreator
            cubesCount={100}
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
          <Box receiveShadow args={[600, 1, 600]}>
            <meshStandardMaterial color={'#4A6E96'} />
          </Box>
        </RigidBody>

        {counter > 6 ? (
          <InstancedRigidBodiesCreator
            cubesCount={100}
            text={counter < 25 ? 'LOADING' : 'START'}
            width={10}
            backgroundColorYellow={false}
            height={8}
          />
        ) : null}

        {counter > 9 ? (
          <InstancedRigidBodiesCreator
            cubesCount={150}
            text={
              counter < 25 ? (counter * 4).toString().toUpperCase() + '%' : 'TO'
            }
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
