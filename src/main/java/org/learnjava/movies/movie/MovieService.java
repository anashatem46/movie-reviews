package org.learnjava.movies.movie;

import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class MovieService {


    private final   MovieRepository movieRepository;
    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

    public Optional<Movie> singlyMovieByImdbID(String imdbId){
        return movieRepository.findByImdbId(imdbId);
    }

}
