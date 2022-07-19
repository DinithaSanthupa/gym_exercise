import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';

import Exercises from '../components/Exercises';
import SeacrhExercises from '../components/SeacrhExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SeacrhExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home;