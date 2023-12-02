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

export default function App() {
  // const { width: w, height: h } = useThree((state) => state.viewport)

  const [counter, setCounter] = useState(0);

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
        <ambientLight intensity={1} />

        <pointLight
          intensity={10000}
          position={[100, 100, 0]}
          castShadow
          distance={1000}
        />

        <RigidBody type="fixed">
          <CuboidCollider args={[50, 500, 2]} position={[0, 0, 50.5]} />
          <CuboidCollider args={[50, 500, 2]} position={[0, 0, -50.5]} />
          <CuboidCollider args={[2, 500, 50]} position={[50.5, 0, 0]} />
          <CuboidCollider args={[2, 500, 50]} position={[-50.5, 0, 0]} />
        </RigidBody>

        <InstancedRigidBodiesCreator
          cubesCount={50}
          text={'WELCOME'}
          width={10}
          backgroundColorYellow={false}
          height={10}
          fontSize={0.9}
        />

        {counter > 3 ? (
          <InstancedRigidBodiesCreator
            cubesCount={50}
            text={'HANGZHOU INTERNATIONAL SCHOOL'}
            width={25}
            backgroundColorYellow={true}
            height={5}
            fontSize={1.2}
          />
        ) : null}

        <RigidBody restitution={1} type="fixed" position={[0, -1, 0]}>
          <Box receiveShadow args={[1000, 1, 1000]}>
            <meshStandardMaterial color={'#F6BE00'} />
          </Box>
        </RigidBody>

        {counter > 6 ? (
          <InstancedRigidBodiesCreator
            cubesCount={30}
            text={'LOADING'}
            width={10}
            backgroundColorYellow={false}
            height={8}
          />
        ) : null}

        {counter > 9 ? (
          <InstancedRigidBodiesCreator
            cubesCount={150}
            text={counter.toString().toUpperCase() + '%'}
            width={4}
            backgroundColorYellow={true}
            height={4}
            fontSize={2}
          />
        ) : null}
      </Physics>

      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}
