import React from 'react';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const LabResults = () => {
  // Dữ liệu mẫu - sẽ được thay thế bằng dữ liệu thực từ API
  const labResults = [
    {
      id: 1,
      date: '2024-01-15',
      testType: 'CD4',
      result: '500 cells/mm³',
      status: 'Bình thường',
    },
    {
      id: 2,
      date: '2024-01-15',
      testType: 'Viral Load',
      result: '< 50 copies/mL',
      status: 'Không phát hiện',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Kết quả xét nghiệm
        </Typography>
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ngày xét nghiệm</TableCell>
                <TableCell>Loại xét nghiệm</TableCell>
                <TableCell>Kết quả</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell>Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labResults.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>{result.date}</TableCell>
                  <TableCell>{result.testType}</TableCell>
                  <TableCell>{result.result}</TableCell>
                  <TableCell>{result.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => console.log('Xem chi tiết', result.id)}
                    >
                      Xem chi tiết
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default LabResults;