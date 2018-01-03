/*
 * @flow
 */

import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faCheckCircle } from '@fortawesome/fontawesome-pro-light';

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

const AppContainer = () => {

  return (
    <ContainerOuterWrapper>
      <ContainerInnerWrapper>
        <LoginSuccessCheck>
          <FontAwesomeIcon icon={faCheckCircle} size="4x" />
        </LoginSuccessCheck>
        <p>Success! You are logged in to OpenLattice.</p>
      </ContainerInnerWrapper>
    </ContainerOuterWrapper>
  );
};

export default AppContainer;
