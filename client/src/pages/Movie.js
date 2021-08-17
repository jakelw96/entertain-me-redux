import React from 'react';
import { Redirect } from 'react-router';
import auth from '../utils/auth';
import SearchMedia from '../components/Movie'

const Movie = () => {
  if (!auth.loggedIn()) {
    return <Redirect to ="/" />
  }
  
  return (
    <main>
      <div>
        <div className="flex-row mb-3">
          <h2 className="bg-dark text-secondary p-3 display-inline-block">
            So, you need a movie to watch? Click on a genre below and watch the magic happen!
          </h2>
          <SearchMedia />
        </div>
      </div>
    </main> 
)};

export default Movie;