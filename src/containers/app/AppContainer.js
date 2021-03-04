/*
 * @flow
 */

import React, { useCallback } from 'react';

import styled from 'styled-components';
import { AuthActions } from 'lattice-auth';
import { useDispatch } from 'react-redux';

const ContainerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 30px;
`;

const LogOutButton = styled.button`
  background-color: white;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  padding: 10px 20px;
  position: absolute;
  right: 50px;
  text-align: center;
  text-decoration: none;
  top: 50px;
  white-space: nowrap;
`;

const AppContainer = () => {

  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(AuthActions.logout());
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <LogOutButton onClick={logout}>
        Log Out
      </LogOutButton>
      <p>
        Success! You are logged in to OpenLattice.
      </p>
    </ContainerWrapper>
  );
};

export default AppContainer;
