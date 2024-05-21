"use client";
import { particleConfig } from "@/constants/particleConfig";
import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function BgParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-screen h-screen absolute top-0 left-0 -z-[1] hidden md:block"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleConfig}
    />
  );
}
