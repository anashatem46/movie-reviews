package org.learnjava.movies.review;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequiredArgsConstructor
@RestController("api/v1/movies")
public class ReviewController {

private ReviewService reviewService;

@PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String , String> payload){
    return new ResponseEntity<Review>(reviewService.createReview(payload.get("reviewBody"),payload.get("imdbId")), HttpStatus.CREATED);


}

}
