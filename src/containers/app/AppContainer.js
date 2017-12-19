/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, logout } from '../../core/auth/AuthActionFactory';

/*
 * styled components
 */

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 800px;
`;

const AppContainer = () => {

  return (
    <AppWrapper>OpenLattice</AppWrapper>
  );
};

function mapDispatchToProps(dispatch :Function) :Object {

  return {
    actions: bindActionCreators({ login, logout }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AppContainer);
