import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Auth from '../utils/auth';









const Tv = props => {
  

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing television search.
        </h2>
        <button className="btn ml-auto">
          Add Friend
        </button>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          
        </div>

        <div className="col-12 col-lg-3 mb-3">
        </div>
      </div>
      <div></div>
    </div>
)};

export default Tv;