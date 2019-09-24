import React, { FunctionComponent } from 'react';

import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkItem } from '../types';

import styles from './Header.scss';

interface Props {

}

const NavNextLink = ({link, label}: {link: string, label: string}) => (
  <Link href={link} passHref={true}>
    <Nav.Link as={'a'}>{label}</Nav.Link>
  </Link>
);

const Header: FunctionComponent<Props> = () => {
  const linkItems: Array<LinkItem> = [
    {link: '/intro', label: '소개'},
    {link: '/laboratory', label: '실험실'},
  ];

  return (
    <header>
        <Navbar bg={'dark'} variant={'dark'} className={styles.customNavbar}>
          <Container>
            <Link href={'/'} passHref={true}>
              <Navbar.Brand className={'mr-auto'}>
                Taawoo
              </Navbar.Brand>
            </Link>

            <Nav>
              {linkItems.map((item, idx) => (
                <NavNextLink link={item.link} label={item.label} key={idx} />
              ))}
            </Nav>
          </Container>
        </Navbar>
    </header>
  );
};

export default Header;
