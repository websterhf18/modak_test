// ↓ 3rd party utils ↓
import {AxiosInstance} from 'axios';

// ↓ models & types ↓

// ↓ utils ↓
import defaultAPIConn from './axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createAPI = (conn: AxiosInstance = defaultAPIConn) => {
  const fetchArtworks = async () => {
    const {data} = await conn.get<any>(`/artworks`);
    return data;
  };

  const fetchDetailArt = async (artId: string) => {
    const {data} = await conn.get<any>(`/artworks/${artId}`);
    return data;
  };

  return {
    fetchArtworks,
    fetchDetailArt,
  };
};

export default createAPI();

export {createAPI};
