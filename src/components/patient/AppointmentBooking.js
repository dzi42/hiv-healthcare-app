import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [doctor, setDoctor] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đặt lịch ở đây
    console.log({ selectedDate, selectedTime, doctor, reason });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Đặt lịch khám
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Ngày khám"
                  value={selectedDate}
                  onChange={setSelectedDate}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Giờ khám"
                  value={selectedTime}
                  onChange={setSelectedTime}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Bác sĩ</InputLabel>
                <Select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  label="Bác sĩ"
                >
                  <MenuItem value="doctor1">Bác sĩ A</MenuItem>
                  <MenuItem value="doctor2">Bác sĩ B</MenuItem>
                  <MenuItem value="doctor3">Bác sĩ C</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Lý do khám"
                multiline
                rows={4}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Xác nhận đặt lịch
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AppointmentBooking;