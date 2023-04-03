import { GetActors } from 'components/Server/Server';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [actors, setActors] = useState();
  const id = useParams();
  console.log(id);
  useEffect(() => {
    GetActors(id.movieId).then(actor => {
      setActors(actor);
    });
  }, [id.movieId]);
  if (!actors) {
    return null;
  }
  console.log(actors);
  return (
    <div>
      {actors.map(inf => (
        <div key={inf.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${inf.profile_path}`}
            alt=""
          />
          <p>{inf.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Cast;
