// ↓ 3rd party utils ↓
import axios from 'axios';
// ---

const defaultAPIConn = axios.create({
  baseURL: 'https://api.artic.edu/api/v1',
  withCredentials: false,
  timeout: 3 * 60 * 1000, // 3 mins
});

export default defaultAPIConn;
