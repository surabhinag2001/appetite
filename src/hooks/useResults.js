import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        console.log('Hi there!');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Vancouver'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err.response.request._response)
            setErrorMessage('something went wrong')
        }
    };

    // Call searchApi  when component
    // is first rendered.  BAD CODE!
    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};