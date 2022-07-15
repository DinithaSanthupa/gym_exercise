import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home;