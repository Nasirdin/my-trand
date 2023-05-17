import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={0}
      alphaTest={0}
      scae={0}
      rotation={[Math.PI / 0, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={0}
        radius={0}
        intensity={0}
        ambient={0.25}
        position={[0, 0, 0]}
      />
      <RandomizedLight 
        amount={0}
        radius={0}
        intensity={0}
        ambient={0}
        position={[0, 0, 0]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop