import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer IusXoX6CYDgoPIO4AHBHuhe2cSwgOgNPUyrmbU-cHeh-hd7BV3a9wlAK3xvM_Tjagxjk3eG4HhoIgEwUrKJ5STwi3jp23WipRuiZpDxyJvvnbAaElOhNewq7oskGX3Yx'
    }
});