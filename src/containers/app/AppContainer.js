/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { faCheckCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthActionFactory } from 'lattice-auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StyledButton from '../../components/buttons/StyledButton';

const { logout } = AuthActionFactory;

/*
 * styled components
 */

const ContainerOuterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const ContainerInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: 900px;
`;

const LoginSuccessCheck = styled.div`
  color: #7dd322;
  display: flex;
`;

const StyledActionButton = styled(StyledButton)`
  position: absolute;
  right: 50px;
  top: 50px;
`;

/*
 * types
 */

type Props = {
  actions :{
    logout :() => void;
  };
};

const AppContainer = ({ actions } :Props) => (
  <ContainerOuterWrapper>
    <ContainerInnerWrapper>
      <StyledActionButton onClick={actions.logout}>
        Logout
      </StyledActionButton>
      <LoginSuccessCheck>
        <FontAwesomeIcon icon={faCheckCircle} size="4x" />
      </LoginSuccessCheck>
      <p>
        Success! You are logged in to OpenLattice.
      </p>
    </ContainerInnerWrapper>
  </ContainerOuterWrapper>
);

function mapDispatchToProps(dispatch :Function) :Object {

  return {
    actions: bindActionCreators({ logout }, dispatch)
  };
}

// Missing type annotation for `CP`. `CP` is a type parameter declared in function type [1] and was implicitly
// instantiated at call of `connect` [2].
// $FlowFixMe
export default connect(null, mapDispatchToProps)(AppContainer);
