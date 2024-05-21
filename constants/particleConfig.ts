import type { ISourceOptions } from "tsparticles-engine";

export const particleConfig: ISourceOptions = {
  background: {},
  backgroundMask: {
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  detectRetina: true,
  fpsLimit: 40,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onDiv: {
        ids: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: false,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 0.4,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 90,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
    },
  },
  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#e68e2e",
      animation: {
        enable: false,
        speed: 1,
        sync: true,
      },
    },
    links: {
      blink: false,
      color: {
        value: "#f5d393",
      },
      consent: false,
      distance: 150,
      enable: true,
      opacity: 0.5,
      shadow: {
        blur: 5,
        color: {
          value: "lime",
        },
        enable: false,
      },
      triangles: {
        enable: false,
      },
      width: 1,
      warp: false,
    },
    move: {
      enable: true,
      attract: {
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      direction: "none",
      noise: {
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
      },
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 75,
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0,
        speed: 2,
        sync: false,
      },
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: 0.5,
    },
    rotate: {
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      random: false,
      value: 0,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {},
      type: "circle",
    },
    size: {
      animation: {
        destroy: "none",
        enable: false,
        minimumValue: 0,
        speed: 5,
        startValue: "max",
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: { min: 1, max: 5 },
    },
    stroke: {
      color: {
        value: "#ff0000",
      },
      width: 0,
      opacity: 1,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
};
