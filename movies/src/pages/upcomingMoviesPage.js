import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddPlaylistIcon from '../components/cardIcons/addPlaylistIcon'


const UpcomingMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('Upcoming Movies', getUpcomingMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    const playlist = movies.filter(m => m.playlist)
    localStorage.setItem('playlist', JSON.stringify(playlist))

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <AddPlaylistIcon movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;