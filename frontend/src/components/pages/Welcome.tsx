import React from 'react';

import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from '@tanstack/react-router';

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#011627',
  color: '#FFFFFF',
});

const Title = styled(Typography)({
  fontSize: '4rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

const Subtitle = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '2rem',
});

const StyledButton = styled(Button)({
  backgroundColor: '#FF3366',
  color: '#FFFFFF',
  fontSize: '1.2rem',
  padding: '0.8rem 1.5rem',
  '&:hover': {
    backgroundColor: '#FF6677',
  },
});

export const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Container>
        <Title variant="h1" align="center">
          Welcome to RC-Sandbox App
        </Title>
        <Subtitle variant="h5" align="center">
          Your ultimate productivity tool
        </Subtitle>
        <Box textAlign="center">
          <StyledButton
            variant="contained"
            onClick={() =>
              navigate({
                to: '/login',
              })
            }
          >
            Get Started
          </StyledButton>
        </Box>
      </Container>
    </MainContainer>
  );
};
