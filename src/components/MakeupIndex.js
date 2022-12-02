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
    <section className="section has-background-grey">
      <div className="container">
        <div className="columns is-multiline">
          {makeups.map((makeup) => {
            if (makeup.id > 0 && makeup.id < 129) {
              return (
                <MakeupCard
                  key={makeup.id}
                  name={makeup.name}
                  image={makeup.image_link}
                  brand={makeup.brand}
                  prodLink={makeup.product_link}
                  tag={makeup.tag_list}
                  id={makeup.id}
                  description={makeup.description}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default MakeupIndex;
