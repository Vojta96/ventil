import React from "react";
import Constructions from "./Constructions/Constructions";
import HeatLoss from "./HeatLoss";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from "@material-ui/core/Paper";
import SwipeableViews from 'react-swipeable-views';

const NewConstructions = props => {
    const [value, setValue] = React.useState(0);

    return (
        <>
            <Paper>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(e, v) => {
                        setValue(v);
                    }}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Konstrukce" />
                    <Tab label="Tepelná ztráta" />
                </Tabs>
            </Paper>
            <SwipeableViews
                index={value}
                onChangeIndex={(i) => setValue(i)}
                style={{ height: '100vh' }}
            >
                <div
                    hidden={value !== 0}
                >
                    <Constructions />
                </div>
                <div
                    hidden={value !== 1}
                >
                    <HeatLoss />
                </div>
            </SwipeableViews>
        </>
    )

};

export default NewConstructions;