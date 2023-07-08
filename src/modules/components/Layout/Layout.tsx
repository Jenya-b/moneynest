import { Outlet } from 'react-router-dom';

import { Wrapper, Container } from './Layout.styled';
import { Header } from '../Header/Header';

export const Layout = () => (
  <Container>
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  </Container>
);
