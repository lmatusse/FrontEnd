import React from 'react';
import { Container, Wrapper } from './styles';

import Main from '../Main';

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
