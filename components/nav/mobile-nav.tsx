import React from 'react';
import Link from 'next/link';

import { StyledMobileNav } from '../styles/nav.styles';

const MobileNav = () => {
  return (
    <StyledMobileNav>
      <div className="mobile-nav-container">
        <ul className="linkList">
          <li className="listItem">
            <Link href="/">
              <a className="link">Pagina Inicial</a>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/works">
              <a className="link">Projetos</a>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/about">
              <a className="link">Sobre</a>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/notes">
              <a className="link">Anotações</a>
            </Link>
          </li>
          <li className="listItem">
            <Link href="/articles">
              <a className="link">Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </StyledMobileNav>
  );
};

export default MobileNav;
