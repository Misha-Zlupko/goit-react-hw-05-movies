import { GetFilmWatches } from 'components/Server/Server';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const id = useParams();
  useEffect(() => {
    GetFilmWatches(id.movieId).then(rev => {
      setReview(rev);
    });
  }, [id.movieId]);
  console.log(review);
  if (review.length === 0) {
    return <div>Nothing</div>;
  }
  return (
    <div>
      {review.map(rev => (
        <p key={rev.id}>{rev.content}</p>
      ))}
    </div>
  );
};
export default Reviews;
