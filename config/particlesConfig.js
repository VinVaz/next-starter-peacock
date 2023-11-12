const particlesConfig = {
  particles: {
    number: {
      value: 22,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#303030',
    },
    opacity: {
      value: 0.8,
      anim: {
        enable: true,
        speed: 1,
      },
    },
    size: {
      value: 2.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
      },
    },
    links: {
      enable: true,
      distance: 200,
      color: '#303030',
      opacity: 0.25,
      width: 1,
    },
    move: {
      direction: 'outside',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 220,
      },
    },
  },
};

export default particlesConfig;
