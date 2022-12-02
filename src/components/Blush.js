import { useState, useEffect } from 'react';
import { getBlush } from '../lib/api';

function Blush() {
  const [productType, setProductType] = useState(null);

  useEffect(() => {
    getBlush()
      .then((res) => setProductType(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(productType);

  return <p>Here</p>;
}

export default Blush;
