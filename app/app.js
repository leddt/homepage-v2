import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader, CardTitle, CardText} from "material-ui/Card";
import {List, ListItem} from "material-ui/List";
import Divider from "material-ui/Divider";

const styles = {
    column: {
        float: "left",
        width: 400,
        margin: 20
    }
}


const App = () => (
    <MuiThemeProvider>
        <div>
            <div style={styles.column}>
                <Card>
                    <CardHeader title="Test 1" />
                    <List>
                        <ListItem primaryText="Item 1" />
                        <Divider />
                        <ListItem primaryText="Item 2" />
                        <Divider />
                        <ListItem primaryText="Item 3" />
                    </List>
                </Card>
            </div>
            <div style={styles.column}>
                <Card>
                    <CardHeader title="Test 2" />
                    <List>
                        <ListItem primaryText="Item 1" />
                        <Divider />
                        <ListItem primaryText="Item 2" />
                        <Divider />
                        <ListItem primaryText="Item 3" />
                    </List>
                </Card>
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;