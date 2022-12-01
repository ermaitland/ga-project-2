import { useState, useEffect } from 'react';
import { getFoundation } from '../lib/api';

function Foundation() {
  const [productType, setProductType] = useState(null);

  useEffect(() => {
    getFoundation()
      .then((res) => setProductType(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(productType);

  return <p>Here</p>;
}

export default Foundation;
