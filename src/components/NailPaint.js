import { useState, useEffect } from 'react';
import { getNailPaint } from '../lib/api';
import Spinner from './Spinner';
import ProductCard from './ProductCard';

function NailPaint() {
  const [productTypes, setProductTypes] = useState(null);

  useEffect(() => {
    getNailPaint()
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

export default NailPaint;
