import { useState, useEffect } from 'react';
import { getEyebrow } from '../lib/api';

function Eyebrow() {
  const [productType, setProductType] = useState(null);

  useEffect(() => {
    getEyebrow()
      .then((res) => setProductType(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(productType);

  return <p>Here</p>;
}

export default Eyebrow;
