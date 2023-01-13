import React, {useState, useEffect} from 'react';
import createAPI from '@api/request';

const useArtworks = (): [Array<any>, boolean] => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);

  const getArtworks = async () => {
    try {
      const response = await createAPI.fetchArtworks();
      setValue(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getArtworks();
    setLoading(true);
  }, []);

  return [value, loading];
};

export default useArtworks;
