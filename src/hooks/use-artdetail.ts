import React, {useState, useEffect} from 'react';
import createAPI from '@api/request';

const useArtdetail = (id: string): [Object, boolean] => {
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(false);

  const getArtdetail = async (id: string) => {
    try {
      const response = await createAPI.fetchDetailArt(id);
      setValue(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getArtdetail(id);
    setLoading(true);
  }, []);

  return [value, loading];
};

export default useArtdetail;
