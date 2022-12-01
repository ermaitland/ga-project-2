import { useEffect, useState } from 'react';

const MakeupShow = () => {
  const [makeup, setMakeup] = useState(null);

  useEffect(() => {
    getSingleMakeup(id)
      .then((res) => setMakeup(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (makeup === null) {
    return <p>Take a deep breath...</p>;
  }

  return (
    <section className="section">
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
