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

const getSingleScatt = (scattId) => axios.get(`${baseUrl}/scatts/${scattId}.json`);

const postScatt = (newScatt) => axios.post(`${baseUrl}/scatts.json`, newScatt);

const deleteScatt = (scattId) => axios.delete(`${baseUrl}/scatts/${scattId}.json`);

const putScatt = (scattId, updatedScatt) => axios.put(`${baseUrl}/scatts/${scattId}.json`, updatedScatt);

export default {
  getScattsByUid,
  getSingleScatt,
  postScatt,
  deleteScatt,
  putScatt,
};
