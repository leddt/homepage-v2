import jsonp from "jsonp";

function YQLQuery(query, callback) {
    const encodedQuery = encodeURIComponent(query.toLowerCase());
    jsonp(`http://query.yahooapis.com/v1/public/yql?q=${encodedQuery}&format=json`, {}, (err, data) => {
        if (!err)
            callback(data)
    });
}

export default YQLQuery;