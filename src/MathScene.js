// src/components/MathScene.js
import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useTransform, useScroll } from "framer-motion";
import { Text } from "@react-three/drei"; // Import Text component for 3D text rendering
import { degreesToRadians, mix } from "popmotion";

const equations = [
  "E = mc^2",
  "F = ma",
  "\\frac{d}{dx}f(x)",
  "\\int_a^b f(x)dx",
  "\\lim_{x \\to \\infty}",
  "e^{i\\pi} + 1 = 0",
  "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
];

const MathEquation = ({ equation, p }) => {
  const ref = useRef();
  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <Text
      ref={ref}
      color="#ffffff"
      fontSize={0.5}
      position={[0, 0, 0]}
      anchorX="center"
      anchorY="middle"
    >
      {equation}
    </Text>
  );
};

const MathScene = ({ numEquations = 7 }) => {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.001, degreesToRadians(180)]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), 0);
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  return (
    <>
      {equations.slice(0, numEquations).map((equation, i) => (
        <MathEquation key={i} equation={equation} p={i / numEquations} />
      ))}
    </>
  );
};

const MathSection = () => (
  <div className="relative min-h-screen bg-black text-white">
    <Canvas gl={{ antialias: false }}>
      <MathScene />
    </Canvas>
  </div>
);

export default MathSection;
