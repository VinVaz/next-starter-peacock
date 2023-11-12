import { useCallback, useEffect } from 'react';
import { AppProps } from 'next/app';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import '../components/styles/layout.css';
import 'highlight.js/styles/felipec.min.css';

/**
 * Root level component for all pages
 * @param {ReactComponentElement} Component Page component to be rendered
 * @param {object} pageProps All props for the page
 */
function MyApp({ Component, pageProps }: AppProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div>
      <Particles
        id="tsparticles"
        className="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
        options={{
          particles: {
            number: {
              value: 22,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#555358',
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
              color: '#555358',
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
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
