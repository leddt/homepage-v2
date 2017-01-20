import React from "react";

import {Card, CardHeader} from "material-ui/Card";
import {List} from "material-ui/List";
import Divider from "material-ui/Divider";

import FeedItem from "./feedItem";

import YQL from "../yql";
import intersperse from "../intersperse";

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items:[]};
    }

    render() {
        let divIndex = 0;
        const listItems = this.state.items.map((item) => <FeedItem key={item.link} item={item} />);
        return (
            <Card>
                <CardHeader title={this.props.title} />
                <List>
                    {intersperse(listItems, () => <Divider key={`divider${divIndex++}`} />)}
                </List>
            </Card>
        );
    }

    componentWillMount() {
        YQL(`select * from rss where url="${this.props.url}"`, (data) => {
            this.setState({items: data.query.results.item});
        });
    }
}

export default Feed;