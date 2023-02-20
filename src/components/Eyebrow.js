import { useState, useEffect } from 'react';
import { getEyebrow } from '../lib/api';
import Spinner from './Spinner';
import MakeupCard from './MakeupCard';

function Eyebrow() {
  const [productTypes, setProductTypes] = useState(null);

  useEffect(() => {
    getEyebrow()
      .then((res) => setProductTypes(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(productTypes);
  if (productTypes === null) {
    return <Spinner />;
  }

  return (
    <section className="section has-background-grey">
      <div className="container">
        <div className="columns is-multiline">
          {productTypes.map((singleProduct) => {
            if (singleProduct.id > 788 && singleProduct.id < 1019) {
              return (
                <MakeupCard
                  key={singleProduct.id}
                  name={singleProduct.name}
                  image={singleProduct.image_link}
                  brand={singleProduct.brand}
                  prodLink={singleProduct.product_link}
                  tag={singleProduct.tag_list}
                  description={singleProduct.description}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Eyebrow;
