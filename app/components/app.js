import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Feed from "./feed";

const styles = {
    column: {
        float: "left",
        width: 500,
        margin: 20
    }
}

const App = () => (
    <MuiThemeProvider>
        <div>
            <div style={styles.column}>
                <Feed title="Hacker News" url="https://news.ycombinator.com/rss" showCommentsButton={true} showUrl={true} />
            </div>
            <div style={styles.column}>
                <Feed title="Slashdot" url="http://rss.slashdot.org/Slashdot/slashdot" showDescription={true} />
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;