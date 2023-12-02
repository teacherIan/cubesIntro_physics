export default function Light(props) {
  return (
    <pointLight
      intensity={10000}
      position={[props.x, props.y, props.z]}
      castShadow
      distance={1000}
      shadow-mapSize={[1024, 1024]}
      shadow-camera-top={300}
      shadow-camera-right={100}
      shadow-camera-bottom={-100}
      shadow-camera-left={-100}
      shadow-camera-near={1}
      shadow-camera-far={300}
    />
  );
}
