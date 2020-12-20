import React, {} from 'react';
import PropTypes from 'prop-types';

const LiveSearchResultRow = ({text, highlight, subtext, onSelect, hide}) => {
    /*
     * Highlight the ocurrences of the search string
     *
     * NOTE: in a real app we would have to refactor the method to not use dangerouslySetInnerHTML
     *       one possible solution would be to split the string in chunks, separating the highlighted terms from the others
     *
     * NOTE2: there's a bug with the highlight word letter case
     */
    const renderHighlightedText = (text) => {
        if (highlight === undefined || highlight.length === 0) return text;

        const regex = new RegExp(`(${highlight})`, 'ig');
        return text.replace(regex, `<strong>${highlight}</strong>`);
    };

    const renderInnerHtml = () => {
        if (subtext === undefined || subtext === null || subtext.length === 0) return renderHighlightedText(text);

        return renderHighlightedText(text) + ` <span class="text-gray-500 text-sm">en ${renderHighlightedText(subtext)}</span>`;
    };

    return (
        <button className="w-full text-left hover:bg-gray-200 p-3 text-gray-600 focus:border-transparent"
                dangerouslySetInnerHTML={{__html: renderInnerHtml()}}
                onClick={() => {
                    onSelect(text);
                    hide();
                }}/>
    );
};

LiveSearchResultRow.propTypes = {
    text: PropTypes.string.isRequired,
    subtext: PropTypes.string,
    highlight: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired
};

export default LiveSearchResultRow;