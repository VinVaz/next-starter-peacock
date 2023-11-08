import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { HTMLAttributes } from "react";

interface IStyledHamburger extends HTMLAttributes<HTMLButtonElement> {
  menuOpen: boolean;
}

const fadeDown = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: .3;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const NavSection = styled.header`
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 5em;
  position: relative;
  z-index: 10;

  .no-underline {
    color: #2d2d2d;
    font-size: 1.1em;
    font-weight: bold;
  }

  .navRight {
    position: relative;
    background-color: #E8E8F8;
  }

  .navWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navHomeLink {
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    &:hover {
    }
  }

  .navLinkList {
    display: none;
    list-style: none;
  }

  .navLinkItem {
    margin-right: 1.5em;
    font-size: 1.2em;
    &:last-child {
      margin-right: 0;
    }
  }

  .navLink {
    text-decoration: none;

    &:hover {
    }
  }

  .no-underline {
    display: flex;
    align-items: center;
  }

  @media (min-width: 759px) {
    margin-bottom: 5em;

    .navLinkList {
      display: flex;
    }
  }
`;

export const StyledMobileNav = styled.section`
  
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${fadeDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  .mobile-nav-container {
    
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }

  .linkList {
    background-color: #E8E8F8;
    padding: 50px 80px;
    border-radius: 1.2rem;
    list-style-type: none;
  }
  .listItem {
    text-align: center;
    margin-bottom: 2em;
  }

  .link {
    font-size: 1.2em;
  }
`;

export const StyledHamburger = styled.button<IStyledHamburger>`
  height: 2em;
  width: 2em;
  background: inherit;
  display: block;
  padding: 0.5em;
  border: 1px solid #fff;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background: #303030;
    height: 2px;
    width: 100%;
    position: absolute;
    display: block;
    right: 0;
    transition: all 0.25s;
  }

  &:active,
  &:focus {
    outline-color: #fff;
  }

  &::before {
    top: ${({ menuOpen }) => (menuOpen ? "12px" : "8px")};
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(40deg)" : null)};
  }

  &::after {
    width: ${({ menuOpen }) => (menuOpen ? "100%" : "80%")};
    bottom: ${({ menuOpen }) => (menuOpen ? "12px" : "8px")};
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(-40deg)" : null)};
  }

  @media all and (min-width: 1024px) {
    display: none;
  }
`;
