import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { GitHub, Codepen, Twitter } from "react-feather";

export const StyledFooterSection = styled.footer`
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footerSocialLinks {
    display: flex;
    margin: auto;
    margin-bottom: 0.5em;
  }

  .footerSocialLink {
    display: block;
    margin-right: 1em;
  }

  .about-site {
    text-align: center;
    max-width: 400px;
    font-size: 0.9em;
    margin-right: auto;
    margin-left: auto;
  }
`;

const IconStyles = css`
  height: 1.5em;
  width: 1.5em;
`;

export const GitHubIcon = styled(GitHub)`
  ${IconStyles}
`;
export const TwitterIcon = styled(Twitter)`
  ${IconStyles}
`;
export const CodepenIcon = styled(Codepen)`
  ${IconStyles}
`;
