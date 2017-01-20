if (!window.YQLCallbacks) {
    window.YQLCallbacks = [];
}

function YQLQuery(query, callback) {
    if (!query || !callback) {
        throw new Error('YQLQuery: Parameters may be undefined');
    }

    var scriptEl = document.createElement('script'),
        uid = 'yql' + +new Date(),
        encodedQuery = encodeURIComponent(query.toLowerCase());

    window.YQLCallbacks[uid] = function(json) {
        callback(json);
        delete window.YQLCallbacks[uid];
        document.body.removeChild(scriptEl);
    };

    scriptEl.src = 'http://query.yahooapis.com/v1/public/yql?q='
                 + encodedQuery + '&format=json&callback=YQLCallbacks.' + uid; 

    document.body.appendChild(scriptEl);
}

export default YQLQuery;