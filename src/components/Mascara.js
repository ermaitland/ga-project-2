import { useState, useEffect } from 'react';
import { getMascara } from '../lib/api';

function Mascara() {
  const [productType, setProductType] = useState(null);

  useEffect(() => {
    getMascara()
      .then((res) => setProductType(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(productType);

  return <p>Here</p>;
}

export default Mascara;
