/*
 * @flow
 */

import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faCheckCircle } from '@fortawesome/fontawesome-pro-light';
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

const StyledActionButton = StyledButton.extend`
  position: absolute;
  right: 50px;
  top: 50px;
`;

/*
 * types
 */

type Props = {
  actions :{
    logout :Function;
  };
};

const AppContainer = (props :Props) => {

  return (
    <ContainerOuterWrapper>
      <ContainerInnerWrapper>
        <StyledActionButton onClick={props.actions.logout}>Logout</StyledActionButton>
        <LoginSuccessCheck>
          <FontAwesomeIcon icon={faCheckCircle} size="4x" />
        </LoginSuccessCheck>
        <p>Success! You are logged in to OpenLattice.</p>
      </ContainerInnerWrapper>
    </ContainerOuterWrapper>
  );
};

function mapDispatchToProps(dispatch :Function) :Object {

  return {
    actions: bindActionCreators({ logout }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AppContainer);
