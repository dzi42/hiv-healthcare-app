import React from 'react';
import { Container, Paper, TextField, Button, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Đăng ký
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Họ và tên"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            required
            autoComplete="email"
          />
          <TextField
            fullWidth
            label="Số điện thoại"
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Vai trò</InputLabel>
            <Select label="Vai trò">
              <MenuItem value="patient">Bệnh nhân</MenuItem>
              <MenuItem value="doctor">Bác sĩ</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Mật khẩu"
            type="password"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Xác nhận mật khẩu"
            type="password"
            margin="normal"
            required
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng ký
          </Button>
          <Typography align="center">
            Đã có tài khoản?{' '}
            <Link to="/login">
              Đăng nhập
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;