import { useEffect, useState } from 'react';
import { getAllMakeup } from '../lib/api';
import MakeupCard from './MakeupCard';

const MakeupIndex = () => {
  const [makeups, seMakeups] = useState(null);

  useEffect(() => {
    getAllMakeup()
      .then((res) => seMakeups(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (makeups === null) {
    return <p>Loading Makeup...</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {makeups.map((makeup) => (
            <MakeupCard key={makeup.id} {...makeup} />
          ))}
        </div>
      </div>
    </section>
  );

  console.log(makeups);
};

export default MakeupIndex;
