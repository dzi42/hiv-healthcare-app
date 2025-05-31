import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import AppointmentBooking from '../../components/patient/AppointmentBooking';
import LabResults from '../../components/patient/LabResults';

const PatientDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bảng điều khiển
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Lịch hẹn sắp tới
            </Typography>
            <AppointmentBooking />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Kết quả xét nghiệm gần đây
            </Typography>
            <LabResults />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientDashboard;