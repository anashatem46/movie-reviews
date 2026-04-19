package org.learnjava.movies.review;


import lombok.RequiredArgsConstructor;
import org.learnjava.movies.movie.Movie;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
@RequiredArgsConstructor
@Service
public class ReviewService {

    private ReviewRepository reviewRepository;
    private MongoTemplate mongoTemplate  ;
    public Review createReview(String reviewBody, String imdbId){

        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(Movie.class).matching(Criteria.where("imdbId").is(imdbId)).apply(new Update().push("reviewIds").value(review)).first();

        return review;
    }

}
