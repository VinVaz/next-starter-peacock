import React from 'react';
import { AppProps } from "next/app";
import Particles from 'react-particles-js';
import "../components/styles/layout.css";

/**
 * Root level component for all pages
 * @param {ReactComponentElement} Component Page component to be rendered
 * @param {object} pageProps All props for the page
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
        <Particles className='particles'
            params={{
                particles: {
                    number: {
                        value: 22,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#303030'
                    },
                    opacity: {
                        value: 0.8,
                        anim: {
                            enable: true,
                            speed: 1,
                        }
                    },
                    size: {
                        value: 2.7,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 200,
                        color: '#303030',
                        opacity: 0.25,
                        width: 1,
                    },
                    move: {
                        speed: 1
                    }
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "grab"
                      },
                      onclick: {
                        enable: false,
                        mode: "grab"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 220,
                      },
                    }
                  },
            }}    
          />
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
