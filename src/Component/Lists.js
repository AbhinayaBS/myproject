import React from 'react';
 // Ensure the path is correct for your project
import VideoCarousel from './Ls2';
import MovieList from './MovieList';
import Main3 from './Main3';
import MovieTrailerSlider from './MovieTrailerSlider';
// import FavoriteMovies from './FavouriteMovies';
//mport TopBoxOfficeHits from './Ls1';

const Lists = () => {
  return (
    <div>
     <MovieTrailerSlider/>
    
     <MovieList/>

     {/* <FavoriteMovies/> */}
    
    </div>
  );
};

export default Lists;
