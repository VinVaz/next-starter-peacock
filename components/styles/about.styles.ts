import styled from "@emotion/styled";

export const StyledAbout = styled.section`
  .avatarImage {
    margin-right: 0.8em;
    float: left;

    img {
      border-radius: 3px;
      height: 150px;
      width: 150px;
    }
  }

  @media (min-width: 759px) {
    .avatarImage {
      margin-right: 1.5em;
      margin-bottom: 1.5em;
      img {
        height: 180px;
        width: 180px;
      }
    }
    
  }

  @media (min-width: 1400px) {
    .avatarImage {
      img {
        width: 180px;
      }
    }
  }
`;

