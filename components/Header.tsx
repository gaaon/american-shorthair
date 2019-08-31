import React, {FunctionComponent} from 'react';

import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface Props {

}

const NavNextLink = ({link, label}: {link: string, label: string}) => (
  <Link href={link}>
    <Nav.Link as={'a'} href={link}>{label}</Nav.Link>
  </Link>
);

const Header: FunctionComponent<Props> = () => (
  <header>
      <Navbar bg={'dark'} variant={'dark'}>
        <Container>
          <Navbar.Brand className={'mr-auto'}>
            Taawoo
          </Navbar.Brand>

          <Nav>
            <NavNextLink link={'/intro'} label={'소개'} />
            <NavNextLink link={'/blog'} label={'블로그'} />
            <NavNextLink link={'/service'} label={'서비스'} />
          </Nav>
        </Container>
      </Navbar>
  </header>
);

export default Header;
