import styled from "@emotion/styled";

export const StyledContent = styled('section')`
  ul,
  ol {
    padding-left: 1em;
    margin-bottom: 1em;
  }
  
  h2 {
    margin-top: 5rem;
  }

  background-color: #E8E8F8;

  .mainImage {
    border-radius: 1.2rem;
    
  }

  .mainImageContainer {
    margin-bottom: 2rem;
  }

  .largeTextTime {
    display: flex;
    justify-content: center;
  }

  .largeTextTime > time {
    display: inline-flex;
    background-color: #474747;
    color: #fff;
    margin-bottom: 2em;
    padding: 1px 6px;
    border-radius: 0.2rem;
  }

  img {
    margin-bottom: 1em;
    display: block;
    object-fit: cover;
  }
  ul ul,
  ol ol {
    margin-bottom: 0;
  }
  li {
    margin-bottom: 0.5em;
  }

  .code {
    border-radius: 5px;
    overflow: auto;
  }

  pre {
    border: 1px solid #d0d0d0;
    display: block;
    border-radius: 5px;
    font-size: 14px;
    overflow-x: auto;
    margin-bottom: 3rem;
  }

  blockquote {
    background-color: #303030;
    border: 1px solid #dcdcdc;
    padding: 10px 10px 10px 30px;
    margin: 10px 0;
  }
  
`;
