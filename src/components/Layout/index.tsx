import React from 'react';
import { Container, Wrapper } from './styles';

const Layout = (props: any) => {
    return (
        <Container>
          <Wrapper>
              { props.children }
          </Wrapper>
      </Container>
    );
}

export default Layout;
