import React from 'react';
import PropTypes from 'prop-types';

import { Segment, Header, Container } from 'semantic-ui-react';

import Link from '../ui/Link';
import { rootPath } from 'helpers/routes';

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
    <Header>
      <Link to={rootPath()}>-=Reac† b1og=-</Link>
    </Header>
  </Segment>
);


const Footer = () => (
  <Segment>
    Powered by iSharov
  </Segment>
);