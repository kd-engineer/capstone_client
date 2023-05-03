
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const AvatarModel = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/avatar_kd_animation.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature002">
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );

  useGLTF.preload("/avatar_kd_animation.glb");
}

export default AvatarModel