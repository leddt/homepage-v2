import React from "react";
import moment from "moment";

import {Card, CardHeader} from "material-ui/Card";
import {List} from "material-ui/List";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import RefreshIcon from "material-ui/svg-icons/action/update";

import FeedItem from "./feedItem";

import YQL from "../yql";
import intersperse from "../intersperse";

const styles = {
    cardToolbar: {
        position: "absolute",
        right: 0,
        top: 0
    }
}

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items:[]};
    }

    render() {
        let divIndex = 0;
        const listItems = this.state.items.map((item) => 
            <FeedItem key={item.link} 
                      item={item} 
                      showDescription={this.props.showDescription}
                      showCommentsButton={this.props.showCommentsButton} />);

        return (
            <Card>
                <CardHeader title={this.props.title} subtitle={"Refreshed at " + this.state.timestamp}>
                    <div style={styles.cardToolbar}>
                        <IconButton tooltip="Refresh" onClick={() => this.refreshFeed()}>
                            <RefreshIcon color="#999" />
                        </IconButton>
                    </div>
                </CardHeader>
                <List>
                    {intersperse(listItems, () => <Divider key={`divider${divIndex++}`} />)}
                </List>
            </Card>
        );
    }

    componentWillMount() {
        this.refreshFeed();
    }

    refreshFeed() {
        YQL(`select * from rss where url="${this.props.url}"`, (data) => {
            this.setState({
                timestamp: moment().format("HH:mm"),
                items: data.query.results.item
            });
        });
    }
}

export default Feed;