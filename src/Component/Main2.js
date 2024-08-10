// import React from 'react';
// import './Main2.css';

// const Main2b = () => {
//   const revisitMovies = [
//     { id: 1, title: 'The Flood', image: 'a1.jpg' },
//     { id: 2, title: 'Reinas', image: 'a2.jpg' },
//     { id: 3, title: 'Electric Child', image: 'a3.jpg' },
//     { id: 4, title: 'Movie 4', image: 'a4.jpg' },
//     { id: 5, title: 'Sauvages', image: 'a5.jpg' },
//     { id: 6, title: 'Movie 6', image: 'a6.jpg' },
//     { id: 7, title: 'Suicide Squad', image: 'a7.jpg' },
//     { id: 8, title: 'Dog on Trial', image: 'a8.jpg' },
//     { id: 9, title: 'Movie 9', image: 'a9.jpg' },
//   ];

//   return (
//     <div className="main-part2nd-page">
//       <section className="main-part2nd-section">
//         <h2 className="main-part2nd-heading">Locarno77—The Letterboxd Piazza Grande Award</h2>
//         <div className="main-part2nd-revisit">
//           {revisitMovies.map(movie => (
//             <div key={movie.id} className="main-part2nd-revisit-item">
//               <img src={movie.image} alt={movie.title} className="main-part2nd-revisit-image" />
//             </div>
//           ))}
//         </div>
//         <p>
//           Add the films selected for the complete <strong className="main-part2nd-highlight-text">77th Locarno Film Festival</strong> lineup to your watchlist now, taking place on 7-17 August, 2024.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Main2b;



import React from 'react';
import './Main2.css';

const Main2 = () => {
  const revisitMovies = [
    { id: 1, title: 'The Flood', image: 'a1.jpg' },
    { id: 2, title: 'Reinas', image: 'a2.jpg' },
    { id: 3, title: 'Electric Child', image: 'a3.jpg' },
    { id: 4, title: 'Movie 4', image: 'a4.jpg' },
    { id: 5, title: 'Sauvages', image: 'a5.jpg' },
    { id: 6, title: 'Movie 6', image: 'a6.jpg' },
    { id: 7, title: 'Suicide Squad', image: 'a7.jpg' },
    { id: 8, title: 'Dog on Trial', image: 'a8.jpg' },
    { id: 9, title: 'Movie 9', image: 'a9.jpg' },
  ];

  return (
    <div className="main-part2nd-page">
      <section className="main-part2nd-section">
        <h2 className="main-part2nd-heading">Locarno77—The Letterboxd Piazza Grande Award</h2>
        <div className="main-part2nd-revisit">
          {revisitMovies.map(movie => (
            <div key={movie.id} className="main-part2nd-revisit-item">
              <img src={movie.image} alt={movie.title} className="main-part2nd-revisit-image" />
            </div>
          ))}
        </div>
        <p>
          Add the films selected for the complete <strong className="main-part2nd-highlight-text">77th Locarno Film Festival</strong> lineup to your watchlist now, taking place on 7-17 August, 2024.
        </p>
      </section>
    </div>
  );
};

export default Main2;
