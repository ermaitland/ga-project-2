import { useEffect, useState } from 'react';
import { getAllMakeup } from '../lib/api';
import MakeupCard from './MakeupCard';
import Spinner from './Spinner';

const MakeupIndex = () => {
  const [makeups, seMakeups] = useState(null);

  useEffect(() => {
    getAllMakeup()
      .then((res) => seMakeups(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (makeups === null) {
    return <Spinner />;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {makeups.map((makeup) => (
            <MakeupCard
              key={makeup.id}
              name={makeup.name}
              image={makeup.image_link}
              brand={makeup.brand}
              category={makeup.catagory}
              id={makeup.id}
            />
          ))}
        </div>
      </div>
    </section>
  );

  console.log(makeups);
};

export default MakeupIndex;
