import { Outlet } from 'react-router-dom';

import { Wrapper, Container } from './Layout.styled';

export const Layout = () => (
  <Container>
    <Wrapper>
      <Outlet />
    </Wrapper>
  </Container>
);
