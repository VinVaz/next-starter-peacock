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

  hr {
    border: 1px solid #A4B2CB;
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
    padding: 0;
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
  
  table {
    border-collapse: collapse;
    position: relative;
    left: 0;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px 0px;
    font-size: 0.8em;
    background-color: #e8e8f8;
    border-radius: 5px;
    border: none;
    width: max-content;
    overflow-x: auto
  }

  table tr {
    text-align: center;
  }

  table thead {
    border-bottom: 2px solid #dedede;
  }

  table th, table td {
    padding: 5px 15px;
    text-align: center;
    color: #303030;
    border: none;
  } 

  table tbody tr:nth-of-type(even) {
    background-color: #cecede;
  }

  table tbody tr:hover {
    background-color: #e1f5fe;
  }

  table tbody tr:nth-of-type(even):hover {
    background-color: #e1f5fe;
  }

`;
