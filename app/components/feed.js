import React from "react";

import {Card, CardHeader} from "material-ui/Card";
import {List, ListItem} from "material-ui/List";
import Divider from "material-ui/Divider";

import YQL from "../yql";
import intersperse from "../intersperse";

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items:[]};
    }

    render() {
        const listItems = this.state.items.map((item) => <ListItem key={item.link} primaryText={item.title} />);
        return (
            <Card>
                <CardHeader title={this.props.title} />
                <List>
                    {intersperse(listItems, <Divider />)}
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