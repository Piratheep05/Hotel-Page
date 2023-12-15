import React from 'react';
import ExperinceView from './ExperinceView/ExperinceView';
import HomeSlider from './HomeSlider/HomeSlider';
import Distination from './Distination/Distination';
import Offer from './Offer/Offer'

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Distination />
      <ExperinceView />
      <Offer />
     
    </>
  );
};

export default Home;
