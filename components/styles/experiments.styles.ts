import styled from "@emotion/styled";

export const Tilter = styled.section`
  padding: 40px 0;
  background: #f0f0ec;
  margin-bottom: 0.75em;
  border-radius: 4px;
  padding: 0.75em;
  cursor: pointer;
  
  &:hover {
    background: #fcfcfc;;
  }
  
  @media all and (min-width: 540px) {
    margin: 0 0.5em 1em;
    flex: 1 1 40%;
  }

  @media all and (min-width: 1024px) {
    flex: 1 30%;
  }
`;

export const StyledExperimentsSection = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;

  h2 {
    font-size: 1.75em;
    margin-bottom: 1rem;
  }

  /* .section-intro {
    font-size: 1.5em;
  } */

  .section {
    display: flex;
    flex-wrap: wrap;
  }

  /* p {
    padding: 40px 0;
  } */

  .experiments {
    display: flex;
    flex-wrap: wrap;
  }

  .experiment-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media all and (min-width: 1020px) {
    h2 {
      font-size: 2.75em;
    }
    p {
      font-size: 0.92em;
    }
  }
`;

export const StyledExperimentItemContainer = styled.a`
  text-decoration: none;
  background: #ff0000;
 
  &:hover {
    text-decoration: none;
  }

  time {
    font-size: 0.75em;
    color: #808080;
  }

  h3 {
    margin-bottom: 0.5em;
    font-size: 1em;
  }

  /* p {
    font-size: 0.6em;
    margin-bottom: 1em;
  } */

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    border: 1px solid #999;
    border-radius: 20px;
    padding: 0.2em 0.75em;
    color: ca0200;
    font-size: 0.75em;
    margin-right: 0.3em;
  }
`;
