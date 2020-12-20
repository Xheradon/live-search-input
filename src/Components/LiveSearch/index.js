import React, {useState, useEffect} from 'react';

import LiveSearchInput from './LiveSearchInput';
import LiveSearchResults from './LiveSearchResults';

// fetch data from the server or throw an error in case of failure
const fetchData = async (searchTerm, signal) => {
    const response = await fetch(`http://localhost:3000/search?q=${searchTerm}`,
        {method: 'GET', headers: {Accept: 'application/json'}, signal: signal}
    );
    if (!response.ok) throw {message: 'error fetching data'};
    return await response.json();
};


const LiveSearch = () => {
    const [data, setData] = useState([]); // the fetched data
    const [state, setState] = useState('initial'); // the state of the data fetch
    const [searchTerm, setSearchTerm] = useState(''); // the value of the user input
    const [areResultsVisible, setAreResultsVisible] = useState(false); // toggle result visibility

    /*
     * Fetch data each time the search term is updated, cancelling previous requests.
     * We could also debounce the search term so we only query after the user has finished writing in order to reduce
     * server load.
     */
    useEffect(() => {
        const abortController = new AbortController();

        if (searchTerm !== '') {
            (async () => {
                setState('loading');
                try {
                    const queryData = await fetchData(searchTerm, abortController.signal);
                    setData(queryData.slice(0, 4));
                    setState('success');
                } catch (e) {
                    setState('error');
                }
            })();
        } else {
            setData([]);
        }

        return function cancel() {
            abortController.abort();
        };
    }, [searchTerm]);

    return (
        <div>
            <p className="font-bold text-sm mb-2">Encuentra profesionales de confianza</p>
            <LiveSearchInput update={setSearchTerm} value={searchTerm} state={state}
                             onFocus={() => setAreResultsVisible(true)}/>
            {state === 'success' && data.length > 0 && areResultsVisible && (
                <LiveSearchResults results={data} searchTerm={searchTerm} onSelect={setSearchTerm}
                                   hide={() => setAreResultsVisible(false)}/>
            )}
        </div>
    );
};

export {LiveSearch as default, LiveSearchInput, LiveSearchResults};