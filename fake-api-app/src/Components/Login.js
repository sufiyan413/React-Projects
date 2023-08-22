import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container } from '@mui/material';

function Login() {
  return (
    <Container sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <TextField label="Email" type="email" name="email" required />
        <TextField label="Password" type="password" name="password" required />
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </Container>
  );
}

export default Login;
