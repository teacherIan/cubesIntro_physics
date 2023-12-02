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

import inter from './assets/inter_regular.woff';
import { Physics, RigidBody, InstancedRigidBodies } from '@react-three/rapier';

export default function InstancedRigidBodiesCreator(props) {
  const cubesCount = props.cubesCount;
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      instances.push({
        key: 'instance_' + i,
        position: [
          (Math.random() - 0.5) * 50,
          100 + i * 4,
          (Math.random() - 0.5) * 50,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      });
    }

    return instances;
  }, []);

  return (
    <InstancedRigidBodies restitution={0.7} instances={instances}>
      <instancedMesh castShadow receiveShadow args={[null, null, cubesCount]}>
        <boxGeometry
          args={[
            props.width,
            props.height ? props.height : 1,
            props.height ? props.height : 2,
          ]}
          castShadow
        />
        <meshStandardMaterial>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera
              makeDefault
              manual
              aspect={props.width / props.height}
              position={[0, 0, 5]}
            />
            <color
              attach="background"
              args={props.backgroundColorYellow ? ['#F6BE00'] : ['#13284B']}
            />

            <Text
              font={inter}
              fontSize={props.fontSize}
              color={props.backgroundColorYellow ? '#13284B' : '#F6BE00'}
            >
              {props.text}
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </instancedMesh>
    </InstancedRigidBodies>
  );
}
