import React from "react";
import Image from 'next/image'

import { Layout, Container } from "../components";
import { StyledAbout } from "../components/styles/about.styles";

/**
 * About page `/about`
 */
const About = () => {
  return (
    <Layout
      pathname={"/about"}
      pageTitle="About"
      pageDescription="About page of Vinicius Vaz which is part of his Professional Portfolio."
    >
      <StyledAbout>
        <Container width="narrow">
          <div className="postContent">
            <div className="avatarImage">
              <Image src="/images/avatar.jpg" width={328} height={364} alt="Vinicius Vaz" />
            </div>
            <p>
              My name is Vinícius Vaz{" ("}
              <a
                href="https://twitter.com/vsvaz"
                target="_blank"
                rel="noopenner noreferrer"
              >
                @vsvaz
              </a>
              {")"}, I'm a future Data Engineer with experience in data cleaning, 
              data scraping and data visualization and software development practices.
              I like working on hard problems and using creativity to bring new things
              into the world.
            </p>
            <p>
              I'm originally trained as a Civil Engineer with emphasis in transportation,
              but started to shift to coding since 2017.
            </p>
            <p>
              I'm used to work with ReactJs, Redux, Node and Python (pandas, numpy, matplotlib).
              If you liked my profile you can contact me at my{" "}
              <a
                href="https://www.linkedin.com/in/vin%C3%ADcius-vaz-046343191/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                Linkedin.
              </a>{" "}
            </p>
          </div>
        </Container>
      </StyledAbout>
    </Layout>
  );
};

export default About;
