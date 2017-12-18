/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as AuthUtils from '../../core/auth/AuthUtils';
import * as Routes from '../../core/router/Routes';
import { login, logout } from '../../core/auth/AuthActionFactory';

import OpenLatticeLogo from '../../assets/images/logo_and_name.png';

/*
 * styled components
 */

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 800px;
`;

/*
 * types
 */

type Props = {
  actions :{
    login :() => void;
    logout :() => void;
  };
};

const AppContainer = (props :Props) => {

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
