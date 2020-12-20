import * as React from 'react';
import PropTypes from 'prop-types';

import LiveSearchResultRow from './LiveSearchResultRow';

const LiveSearchResults = ({results, searchTerm, onSelect, hide}) => {
    return (
        <div className="live-search__results">
            {results.map((r, i) => <LiveSearchResultRow text={r.name} subtext={r.parent_name} highlight={searchTerm}
                                                        key={`result_${i}`} onSelect={onSelect} hide={hide}/>)}
        </div>
    );
};

LiveSearchResultRow.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        subtext: PropTypes.string
    })),
    searchTerm: PropTypes.string,
    onSelect: PropTypes.func,
    hide: PropTypes.func
};

export default LiveSearchResults;