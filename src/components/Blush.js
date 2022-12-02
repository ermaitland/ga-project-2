import { useState, useEffect } from 'react';
import { getBlush } from '../lib/api';
import Spinner from './Spinner';
import ProductCard from './ProductCard';

function Blush() {
  const [productTypes, setProductTypes] = useState(null);

  useEffect(() => {
    getBlush()
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
            if (singleProduct.id > 276 && singleProduct.id < 599) {
              return (
                <ProductCard
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

export default Blush;
