import styled from "@emotion/styled";
// import BackgroundImage from "./images/background-pattern.jpg";

export const StyledIndex = styled.div`
  .page-intro {
  }
`;
export const StyledDesignPlus = styled.section`
  background: #fff url("/images/background-pattern.jpg");
  padding: 40px 0;

  p:nth-child(2) {
    margin-bottom: none;
  }

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .container .text,
  .container .image {
    flex: 1 100%;
  }

  img {
    object-fit: cover;
  }

  h2 {
    font-size: 1.75em;
    color: #000;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      font-size: 2.75em;
    }
  }

  p {
    color: #000;
  }

  .teck-stack {
    display: flex;
    flex-direction: column
  }

  .teck-stack-grid {
    width: 100%;
    padding: 30px;
  }

  .svg-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  .svg-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 759px) {
    .container .text,
    .container .image {
      flex: 1;
    }
    .text {
      margin-right: 5%;
    }
    .teck-stack {
      flex-direction: row
    }
    .teck-stack-text {
      width: 60%;
    }
    .teck-stack-grid {
      width: 40%;
      gap: 30px;
      margin-left: 20px;
      margin-top: 0px;
    }
  }
`;
