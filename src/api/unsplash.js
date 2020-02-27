import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID piPRpVkOBYyamoHWrDRZbd2MpxWMfdhAahkbtm1mq1k'
   }
});

