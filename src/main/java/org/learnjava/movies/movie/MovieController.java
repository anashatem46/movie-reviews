package org.learnjava.movies.movie;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping ("api/v1/movies")
public class MovieController {

    private final MovieService movieService ;
    public MovieController(MovieService movieService){
        this.movieService =movieService;
    }
@GetMapping
    public ResponseEntity <List<Movie>>allMovies(){
    return new ResponseEntity<>(movieService.allMovies(), HttpStatus.OK);
}
@GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> movieById(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Movie>>(movieService.singlyMovieByImdbID(imdbId),HttpStatus.OK);
}
}
