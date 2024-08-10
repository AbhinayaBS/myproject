import React from 'react';
import './Journal.css';

const Journal = () => {
  return (
    <div className="journal-container">
      <header className="journal-header">
        <div className="journal-title">
          <h1>JOURNAL</h1>
        </div>
        <nav className="journal-nav">
          <ul>
            <li><a href="#sections">Spotlight</a></li>
            
            
            <li><a href="#podcast">Podcast</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="journal-main">
        <div className="cinema-sign">
          <img src="ln1.jpg" alt="Cinema Sign" />
        </div>
        <div className="journal-content">
          <h2 className="big-picture">Big Picture</h2>
          <h1 className="journal-headline">
            <a href="https://letterboxd.com/journal/filmmakers-on-cinemas-community-and-moviegoing/" className="headline-link">Happy Together</a> {/* Make sure the href is set correctly */}
          </h1>
          <p className="journal-description">
            For Art House Theater Day, filmmakers and industry folk, from Michael Mann to Flight of the Conchords and Daisy Ridley to Sean Fennessey, share eight community-building ideas to center the collective cinematic experience.
          </p>
          <p className="journal-author">GEMMA GRACEWOOD</p>
        </div>
      </section>

      <section className="article-list">
        {/* Existing Cards */}
        <div className="article-item">
          <img src="jcar1.jpeg" alt="Article Image 1" className="article-image" />
          <div className="article-content">
            <p className="article-category">Interview • 23 Jul 2024</p>
            <h3 className="article-title">
              <a href="https://letterboxd.com/journal/colman-domingo-sing-sing-interview/" className="article-link">Prison Drama</a>
            </h3>
            <p className="article-excerpt">
              Sing Sing star Colman Domingo speaks to Adesola Thomas about rehabilitation through theater, the human vulnerability of acting and how the art you're seeking is also seeking you.
            </p>
            <p className="article-author">ADESOLA THOMAS</p>
          </div>
        </div>

        <div className="article-item">
          <img src="jcar2.jpeg" alt="Article Image 2" className="article-image" />
          <div className="article-content">
            <p className="article-category">Festival Circuit • 21 Jul 2024</p>
            <h3 className="article-title">
              <a href="https://letterboxd.com/journal/steven-soderbergh-karlovy-vary/" className="article-link">Soderbergh's Six</a>
            </h3>
            <p className="article-excerpt">
              From his "stupid" public retirement to having his career turned upside down by a drunken Matt Damon, Oscar winner Steven Soderbergh offers a handful of precious tips on how to remain prolific (and sane) as a film director.
            </p>
            <p className="article-author">RAFA SALES ROSS</p>
          </div>
        </div>

        <div className="article-item">
          <img src="jcar3.jpeg" alt="Article Image 3" className="article-image" />
          <div className="article-content">
            <p className="article-category">Deep Impact • 17 Jul 2024</p>
            <h3 className="article-title">
              <a href="https://letterboxd.com/journal/when-harry-met-sally-anniversary-retrospective/" className="article-link">Old Friends</a>
            </h3>
            <p className="article-excerpt">
              For the 35th anniversary of its iconic sweater, New Year's parties and fake orgasms, Annie Lyons pays homage to When Harry Met Sally... by speaking to obsessive Letterboxd members about their own love stories with the rom-com essential.
            </p>
            <p className="article-author">ANNIE LYONS</p>
          </div>
        </div>

        <div className="article-item">
          <img src="jcar4.jpg" alt="Article Image 4" className="article-image" />
          <div className="article-content">
            <p className="article-category">Community • 20 Jul 2024</p>
            <h3 className="article-title">
              <a href="https://letterboxd.com/journal/shelley-duvall-performances-retrospective/" className="article-link">Sensational Shelley</a>
            </h3>
            <p className="article-excerpt">
              From her emergence as Robert Altman's muse and being terrorized by Jack Torrance to working with Jane Campion, Steve Martin and more, we look back at some of the Letterboxd community's favorite Shelley Duvall performances.
            </p>
            <p className="article-author">MITCHELL BEAUPRÉ</p>
          </div>
        </div>

        <div className="article-item">
          <img src="jcar5.jpg" alt="Article Image 5" className="article-image" />
          <div className="article-content">
            <p className="article-category">Cinemascope • 19 Jul 2024</p>
            <h3 className="article-title">
              <a href="https://letterboxd.com/journal/best-disaster-movies-1990s-twister-twisters/" className="article-link">Eye of the Storm</a>
            </h3>
            <p className="article-excerpt">
              As Twisters swirls its way into theaters, Matt Goldberg explores three different eras of disaster movies and why the 1990s hit the sweet spot between the star-studded mayhem of the 1970s and the CGI-drenched chaos of the post-2000s.
            </p>
            <p className="article-author">MATT GOLDBERG</p>
          </div>
        </div>

        <div className="article-item">
          <img src="jcar6.jpg" alt="Article Image 6" className="article-image" />
          <div className="article-content">
            <p className="article-category">Interview • 17 Jul 2024</p>
            <h3 className="article-title">
              <a href="https://letterboxd.com/journal/osgood-perkins-longlegs-watchlist-interview/" className="article-link">Dark Magic</a>
            </h3>
            <p className="article-excerpt">
              As Osgood Perkins’ satanist horror Longlegs chills audiences, the filmmaker breaks down four key—and unexpected—influences for his spin on the serial killer genre.
            </p>
            <p className="article-author">ELLA KEMP</p>
          </div>
        </div>

        {/* New Card */}
        <div className="article-item new-card">
          <img src="artjor1.jpeg" alt="New Article Image" className="article-image" />
          <div className="article-content">
            <p className="quote">“I don’t know what anybody’s five-year business plan looks like in film or animation. At the end of the day, we’re still just a bunch of students who like sitting on the grass and showing each other pictures and drawings that we have, what our influences are, what we want to do in the future. That’s what keeps us going and drives us forwards.” —<a href="#" className="author">Nora Twomey</a></p>
            <p className="interview-link">Interview · <a href="#" className="title">The Secret of Cels</a></p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Journal;
