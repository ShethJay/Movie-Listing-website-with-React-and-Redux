import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movies';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from './actions';

class MoviesList extends PureComponent {
  componentDidMount() {
    const { getMovies, moviesLoaded, moviesLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;
    if (!moviesLoaded || ((new Date()) - new Date(moviesLoadedAt)) > oneHour) {
      getMovies();
    }
    // this.props.getMovies();
  }

  render() {
    const { movies, moviesLoaded } = this.props;
    if (!moviesLoaded) return <h1>Loading...</h1>;
    return (
      <MovieGrid>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movies.movies,
  moviesLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-row-gap: 1rem;
padding: 1rem;
`;
