import { useEffect, useState } from 'react';
import { getAllMakeup } from '../lib/api';
import MakeupCard from './MakeupCard';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

const MakeupIndex = () => {
  const [makeups, setMakeups] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllMakeup()
      .then((res) => setMakeups(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filterMakeups = () => {
    const regex = new RegExp(searchQuery, 'i');
    const filterMakeups = makeups.filter((makeup) => {
      // console.log({productType:})
      return makeup?.product_type.match(regex) || makeup?.brand.match(regex);
    });
    return filterMakeups;
  };

  if (makeups === null) {
    return <Spinner />;
  }

  return (
    <section className="section has-background-grey">
      <SearchBar value={searchQuery} handleChange={setSearchQuery} />
      <div className="container">
        <div className="columns is-multiline">
          {makeups &&
            filterMakeups().map((makeup) => {
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
