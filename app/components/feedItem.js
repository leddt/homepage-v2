import React from "react";
import {ListItem} from "material-ui/List";
import Avatar from 'material-ui/Avatar';
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

    let description = null;
    let lines = 0;

    if (props.showUrl) {
        description = props.item.link;
        lines = 1;
    }
    else if (props.showDescription) {
        description = props.item.contentSnippet || stripHtml(props.item["content:encoded"]);
        lines = 2;
    }

    return (
        <ListItem key={props.item.link} 
                  primaryText={props.item.title} 
                  onClick={handleItemClick} 
                  secondaryText={description} 
                  secondaryTextLines={lines}
                  rightIconButton={getCommentsButton()}
                  leftAvatar={props.item.source ? <Avatar style={{fontSize: "0.7em"}}>{props.item.source}</Avatar> : null} />
    );
};

function stripHtml(text) {
    return text.replace(/<[^>]+>/g, " ")
}

export default FeedItem;