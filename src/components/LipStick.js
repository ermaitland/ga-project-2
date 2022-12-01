import { useState, useEffect } from 'react';
import { getLipStick } from '../lib/api';

function LipStick() {
  const [productType, setProductType] = useState(null);

  useEffect(() => {
    getLipStick()
      .then((res) => setProductType(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(productType);

  return <p>Here</p>;
}

export default LipStick;
