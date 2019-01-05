import React from "react";
import moment from "moment";
import RSSParser from "rss-parser";

import {Card, CardHeader} from "material-ui/Card";
import {List} from "material-ui/List";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import RefreshIcon from "material-ui/svg-icons/action/update";

import FeedItem from "./feedItem";

import intersperse from "../intersperse";

const styles = {
    cardToolbar: {
        position: "absolute",
        right: 0,
        top: 0
    }
}

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

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
                      showUrl={this.props.showUrl}
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
        this.refreshInterval = window.setInterval(() => this.refreshFeed(), 5*60*1000); // Refresh feed every 5 minutes
    }

    componentWillUnmount() {
        window.clearInterval(this.refreshInterval);
    }

    refreshFeed() {
        let parser = new RSSParser();
        parser.parseURL(CORS_PROXY + this.props.url, (err, feed) => {
            this.setState({
                timestamp: moment().format("HH:mm"),
                items: feed.items
            })
        });
    }
}

export default Feed;