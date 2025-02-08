import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'models/mac-draco.glb',
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(targetRef.current.rotation, {
      y: targetRef.current.rotation.y + Math.PI / 4, // Rotate 45 degrees (northwest direction)
      duration: 3,
      repeat: -1,
      ease: 'none',
    });
  });

  


  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={0.3}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
