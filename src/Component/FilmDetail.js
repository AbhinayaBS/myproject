import React from 'react';
import { useParams } from 'react-router-dom';

const FilmDetail = () => {
  const { title } = useParams();

  // Fetch film details based on the title or use dummy data for now
  const film = {
    title: 'Deadpool & Wolverine',
    date: '2024-07-26',
    imageUrl: 'fil1.jpg',
    duration: '2h 10m',
    genre: 'Action/Comedy',
    director: 'Shawn Levy',
    description: `A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.`,
  };

  return (
    <div className="film-detail">
      <h1>{film.title}</h1>
      <img src={film.imageUrl} alt={film.title} />
      <p>{film.description}</p>
      <p><strong>Release Date:</strong> {film.date}</p>
      <p><strong>Duration:</strong> {film.duration}</p>
      <p><strong>Genre:</strong> {film.genre}</p>
      <p><strong>Director:</strong> {film.director}</p>
    </div>
  );
};

export default FilmDetail;
