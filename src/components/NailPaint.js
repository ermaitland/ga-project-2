import { useState, useEffect } from 'react';
import { getNailPaint } from '../lib/api';

function NailPaint() {
  const [productType, setProductType] = useState(null);

  useEffect(() => {
    getNailPaint()
      .then((res) => setProductType(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(productType);

  return <p>Here</p>;
}

export default NailPaint;
