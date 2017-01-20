import React from "react";
import {ListItem} from "material-ui/List";

const FeedItem = (props) => {
    function handleClick() {
        window.open(props.item.link);
    }

    return (
        <ListItem key={props.item.link} primaryText={props.item.title} onClick={handleClick} secondaryText={props.showDescription ? props.item.description : null} secondaryTextLines={2} />
    );
};

export default FeedItem;