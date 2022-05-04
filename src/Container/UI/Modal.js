import { Button } from '@mui/material';
import React from 'react';
import Card from './Card';
import classes from './Modal.css';

const ErrorModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} />
            <Card className={classes.modal}>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.Okay}>Okay</Button>
                </footer>
            </Card>
        </div >
    );
};

export default ErrorModal;