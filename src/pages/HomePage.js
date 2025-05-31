import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Chào mừng đến với HIV Healthcare
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Đặt lịch khám
              </Typography>
              <Typography variant="body1" paragraph>
                Đặt lịch khám với bác sĩ chuyên khoa một cách dễ dàng và nhanh chóng.
              </Typography>
              <Button variant="contained" color="primary">
                Đặt lịch ngay
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Xem kết quả xét nghiệm
              </Typography>
              <Typography variant="body1" paragraph>
                Tra cứu và theo dõi kết quả xét nghiệm của bạn trực tuyến.
              </Typography>
              <Button variant="contained" color="primary">
                Xem kết quả
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Tư vấn trực tuyến
              </Typography>
              <Typography variant="body1" paragraph>
                Trao đổi trực tuyến với bác sĩ về tình trạng sức khỏe của bạn.
              </Typography>
              <Button variant="contained" color="primary">
                Tư vấn ngay
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;