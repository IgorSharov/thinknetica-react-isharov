import React from 'react';
import PropTypes from 'prop-types';

import { Segment, Header, Container } from 'semantic-ui-react';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    { children }
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <Segment>
    <Header>-=Reac† b1og=-</Header>
  </Segment>
);


const Footer = () => (
  <Segment>
    Powered by iSharov
  </Segment>
);