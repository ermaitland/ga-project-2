import { useEffect, useState } from 'react';
import { getAllMakeup } from '../lib/api';

const MakeupIndex = () => {
  const [makeups, seMakeups] = useState(null);

  useEffect(() => {
    getAllMakeup()
      .then((res) => seMakeups(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (makeups === null) {
    return <p>Loading Makeup...</p>;
  }

  console.log(makeups);

  return <p>Makeup</p>;
};

export default MakeupIndex;
