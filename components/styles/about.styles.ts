/** @jsx jsx */
import styled from "@emotion/styled";

export const StyledAbout = styled.section`
    .postContent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .postText {
    background-color: #E8E8F8;
    border-radius: 1.2rem;
    padding: 10px;
    flex: 1;
    margin-right: 0;
    text-align: justified;
    margin-bottom: 20px; /* Adjust margin-bottom for spacing between text and photo */
  }

  .avatarImage {
    display: block;
    margin-bottom: 20px; /* Adjust margin-bottom for spacing between photo and next element */
    img {
      border-radius: 0.8rem;
      height: 280px;
      width: 280px;
    }
  }

  @media (min-width: 759px) {
    .postContent {
      flex-direction: row;
      align-items: flex-start; /* Align items to the start to avoid centering the image vertically */
    }

    .avatarImage {
      margin-left: 20px;
      img {
        border-radius: 0.8rem;
        height: 200px;
        width: 200px;
      }
    }
  }

  @media (min-width: 1400px) {
    .postContent {
      justify-content: space-between;
    }
  
    .avatarImage {
      height: 100%;
      margin-left: 20px;
      margin-right: 0px;
      img {
        height: 210px;
        width: 210px;
      }
    }
  }
`;