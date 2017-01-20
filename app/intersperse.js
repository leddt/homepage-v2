function intersperse(arr, sep) {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(1).reduce(function(xs, x, i) {
        var newItem;

        if (typeof sep === "function")
            newItem = sep();
        else
            newItem = sep;

        return xs.concat([newItem, x]);
    }, [arr[0]]);
}

export default intersperse