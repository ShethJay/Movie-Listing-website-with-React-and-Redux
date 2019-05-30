import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from './actions';

const initialState = {
    movies: [],
    moviesLoaded: false,
    moviesLoadedAt: null,
    movie: {},
    movieLoaded: false,

}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: payload,
                moviesLoaded: true,
                moviesLoadedAt: new Date(),
            };
        case GET_MOVIE:
            return {
                ...state,
                movie: payload,
                movieLoaded: true,
            };
        case RESET_MOVIE:
            return {
                ...state,
                movie: {},
                movieLoaded: false,
            };
        default:
            return state;
    }
}