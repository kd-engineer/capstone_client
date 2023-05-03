import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react';


const Avatar = () => {
    const avatar = useGLTF("/avatar_kd_animation.glb")

    return (
      <group>
        <primitive object={avatar.scene} />
      </group>
    )
  }


const AvatarCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <Avatar />
    </Canvas>
  )


    {/*const [index, setIndex] = useState(1);
    const avatar = useGLTF("/avatar_kd_animation.glb");
    const { actions, names } = useAnimations(avatar.animations, avatar.scene)
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        actions[names[index]]?.reset().fadeIn(0.5).play()

        return () => {
            actions[names[index]]?.fadeOut(0.5)
        }
    },[index,actions,names])

  return (
    <group>
        <primitive
            object={avatar.scene}
            scale={2}
            position-y={-2}
            rotation-y={-0.5}
            position-x={-1}
        />
        <Html>
            <button onClick={() => {
                setIndex((index+1) % names.length)
                setIsClicked(!isClicked)
            }}>
                ACTION
            </button>
        </Html>
    </group>
  );
}

const AvatarCanvas = () => {
    return (
      <div className='w-full h-full absolute z-[10]'>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight />
          <OrbitControls position={[1, 1, 1]} />
          <Avatar />
        </Canvas>
      </div>
    )*/}
  }


export default AvatarCanvas
