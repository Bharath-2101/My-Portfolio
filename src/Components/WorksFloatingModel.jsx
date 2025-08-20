import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import useMouse from "../Hooks/useMouse";
import * as THREE from "three";
import { fragment, vertex } from "../Hooks/Shader";
import { useAspect, useTexture } from "@react-three/drei";
import { Works } from "../Project Data";
import { motion } from "framer-motion-3d";
import { animate, progress, useMotionValue, useTransform } from "framer-motion";
import useDimensions from "../Hooks/useDimensions";

const WorksFloatingModel = ({ activeProject }) => {
  const mesh = useRef();
  const dimeansions = useDimensions();
  const mouse = useMouse();
  const { viewport } = useThree();
  const textures = Works.map((project, i) => useTexture(project.image));
  const opacity = useMotionValue(0);
  const scale = useAspect(
    textures[0].image.width,
    textures[0].image.height,
    0.35
  );
  const uniforms = useRef({
    uTexture: { value: textures[0] },
    uDelta: { value: { x: 0, y: 0 } },
    uAlpha: { value: 1 },
  });
  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  useEffect(() => {
    if (activeProject != null) {
      animate(opacity, 1, {
        duration: 0.5,
        onUpdate: (progress) =>
          (mesh.current.material.uniforms.uAlpha.value = progress),
      });
      mesh.current.material.uniforms.uTexture.value = textures[activeProject];
    } else {
      animate(opacity, 0, {
        duration: 0.5,
        onUpdate: (progress) =>
          (mesh.current.material.uniforms.uAlpha.value = progress),
      });
    }
  }, [activeProject]);

  const lerp = (x, y, a) => x * (1 - a) + y * a;
  useFrame(() => {
    const { x, y } = mouse;
    const smoothX = smoothMouse.x.get();
    const smoothY = smoothMouse.y.get();
    smoothMouse.x.set(lerp(smoothMouse.x.get(), x.get(), 0.1));
    smoothMouse.y.set(lerp(smoothMouse.y.get(), y.get(), 0.1));
    mesh.current.material.uniforms.uDelta.value = {
      x: x.get() - smoothX,
      y: y.get() - smoothY,
    };
  });

  const x = useTransform(
    smoothMouse.x,
    [0, dimeansions.width],
    [(-1 * viewport.width) / 2, viewport.width / 2]
  );
  const y = useTransform(
    smoothMouse.y,
    [0, dimeansions.height],
    [viewport.height / 2, (-1 * viewport.height) / 2]
  );
  return (
    <group>
      <motion.mesh scale={scale} ref={mesh} position-x={x} position-y={y}>
        <planeGeometry args={[1, 1, 15, 15]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms.current}
          transparent={true}
        />
      </motion.mesh>
    </group>
  );
};

export default WorksFloatingModel;
