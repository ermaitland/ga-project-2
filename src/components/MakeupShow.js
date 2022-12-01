import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMakeup } from '../lib/api';

const MakeupShow = () => {
  const { id } = useParams();
  const [makeup, setMakeup] = useState(null);

  useEffect(() => {
    getSingleMakeup(id)
      .then((res) => setMakeup(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (makeup === null) {
    return (
      <section className="hero is-fullheight-with-navbar has-background-info-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="has-text-centered">Take a deep breath...</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section has-background-info-light">
      <div className="container">
        <h2 className="title has-text-centered">{makeup.name}</h2>
        <hr />
        <div className="columns">
          <div className="column is-half"></div>
        </div>
      </div>
    </section>
  );
};

export default MakeupShow;
