export default function Light(props) {
  return (
    <>
      <directionalLight
        intensity={4}
        position={[props.x, props.y, props.z]}
        castShadow
        distance={20.0}
        shadow-mapSize={[1024, 1024]} //higher map sizes crash on some phones
        shadow-camera-top={100}
        shadow-camera-right={100}
        shadow-camera-bottom={-100}
        shadow-camera-left={-100}
        shadow-camera-near={1}
        shadow-camera-far={400}
      />
    </>
  );
}
