import { Outlet } from 'react-router-dom';

import { Wrapper, Container } from './Layout.styled';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = () => (
  <Container>
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  </Container>
);
