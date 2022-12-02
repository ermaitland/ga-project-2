import { useState, useEffect } from 'react';
import { getLipStick } from '../lib/api';
import ProductCard from './ProductCard';
import Spinner from './Spinner';

function LipStick() {
  const [productTypes, setProductTypes] = useState(null);

  useEffect(() => {
    getLipStick()
      .then((res) => setProductTypes(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(productTypes);

  if (productTypes === null) {
    return <Spinner />;
  }

  return (
    <section className="section has-background-danger-light  is-fulllheight-with-navbar">
      <div className="container">
        <div className="columns is-multiline">
          {productTypes.map((singleProduct) => {
            if (singleProduct.id > 0 && singleProduct.id < 129) {
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

export default LipStick;
