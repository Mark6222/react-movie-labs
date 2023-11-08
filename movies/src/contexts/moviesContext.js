import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [myReviews, setMyReviews] = useState({})

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)) {
      newFavorites = [...favorites, movie.id];
    }
    else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)) {
      newPlaylist = [...playlist, movie.id];
    }
    else {
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist)
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review })
  };
  //console.log(myReviews);

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter(
      (mId) => mId !== movie.id
    ))
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        playlist,
        addToFavorites,
        addToPlaylist,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;