import React from 'react';
import { Container, Paper, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Đăng nhập
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            required
            autoComplete="email"
          />
          <TextField
            fullWidth
            label="Mật khẩu"
            type="password"
            margin="normal"
            required
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng nhập
          </Button>
          <Typography align="center">
            Chưa có tài khoản?{' '}
            <Link to="/register">
              Đăng ký ngay
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;