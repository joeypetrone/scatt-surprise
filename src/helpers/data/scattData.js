import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getScattsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/scatts.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbScatts = response.data;
      const scatts = [];
      if (fbScatts) {
        Object.keys(fbScatts).forEach((fbId) => {
          fbScatts[fbId].id = fbId;
          scatts.push(fbScatts[fbId]);
        });
      }
      resolve(scatts);
    })
    .catch((err) => reject(err));
});

export default { getScattsByUid };
