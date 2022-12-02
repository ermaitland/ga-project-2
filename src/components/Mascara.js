import { useState, useEffect } from 'react';
import { getMascara } from '../lib/api';
import Spinner from './Spinner';
import ProductCard from './ProductCard';

function Mascara() {
  const [productTypes, setProductTypes] = useState(null);

  useEffect(() => {
    getMascara()
      .then((res) => setProductTypes(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(productTypes);
  if (productTypes === null) {
    return <Spinner />;
  }

  return (
    <section className="section has-background-danger-light">
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

export default Mascara;
