import React from 'react';
import styled from 'styled-components';

const FloatingButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ae8;
  }
`;

const ScrollToSignInButton = () => {
  const scrollToSignIn = () => {
    const signInSection = document.getElementById('sign-in-section');
    if (signInSection) {
      signInSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FloatingButton onClick={scrollToSignIn}>
      Sign In
    </FloatingButton>
  );
};

export default ScrollToSignInButton;
