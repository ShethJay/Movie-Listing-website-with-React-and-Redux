export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export function getMovies(){
    return async function(dispatch){
        const res = await fetch(
            'https://api.themoviedb.org/3/discover/movie?api_key=7e33a8665b14e3c290b296c99cfa7418&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
        );
        const movies = await res.json();
        return dispatch({
            type: 'GET_MOVIES',
            payload: movies.results,
        })
    }
}
export function getMovie(id) {
    return async function (dispatch) {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`,
        );
        const movie = await res.json();
        return dispatch({
            type: 'GET_MOVIE',
            payload: movie,
        })
    }
}

export function resetMovie(){
    return {
        type: 'RESET_MOVIE'
    }
}