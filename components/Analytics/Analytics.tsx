import React from 'react'
import PieChart from './PieChart'
import BarChart from './BarChart'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Analytics() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
        },
      }}
    >
      <Paper elevation={3}><PieChart /></Paper> 
      <Paper elevation={3}> <BarChart/></Paper>
      <Paper elevation={3} />
    </Box>
  );
}