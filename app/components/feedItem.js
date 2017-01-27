import React from "react";
import {ListItem} from "material-ui/List";
import IconButton from "material-ui/IconButton";
import CommentIcon from "material-ui/svg-icons/communication/comment";

const FeedItem = (props) => {
    function handleItemClick() {
        window.open(props.item.link);
    }
    function handleCommentsClick(ev) {
        ev.stopPropagation();
        window.open(props.item.comments);
    }

    function getCommentsButton() {
        if (!props.showCommentsButton) return null;
        return (
            <IconButton tooltip="Comments" onClick={handleCommentsClick}>
                <CommentIcon color="#999" />
            </IconButton>
        )
    }

    return (
        <ListItem key={props.item.link} 
                  primaryText={props.item.title} 
                  onClick={handleItemClick} 
                  secondaryText={props.showDescription ? props.item.description : null} 
                  secondaryTextLines={2}
                  rightIconButton={getCommentsButton()} />
    );
};

export default FeedItem;