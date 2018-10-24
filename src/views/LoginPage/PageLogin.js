import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FormLogin from './FormLogin';
import AuthService from './AuthService';


const BackgroundImageFont = require('../../media/images/correosFondo.jpg');
const BackgroundImageLogo = require('../../media/images/correosLogo.jpg');

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]:{
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },

    logo: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
        width: '50%',
    },

    imageBackground: {
        width: '100%',
        position: 'absolute',
        height: '100vh',
        backgroundImage: `url(${BackgroundImageFont})`,
        backgroundSize: 'cover',
    },

    tipografia:{
        fontFamily: 'arial',
        fontSize: '16px',
        textAlign: 'center',
    },

    copyright: {
        fontSize: '9px',
        textAlign: 'center',
        marginTop: '2em',
    },
});

class PageLogin extends Component{   
    onSubmitLogin(userData){        
        AuthService.login(userData.username, userData.password).then((response) => { 
            localStorage.setItem('tkn', response.token);
            this.props.history.push('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    render(){
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.imageBackground}>
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <img className={classes.logo} src={BackgroundImageLogo} alt="AGBC"/>
                            <Typography className={classes.tipografia}>AGENCIA BOLIVIANA DE CORREOS</Typography>
                            <FormLogin onSubmit={this.onSubmitLogin.bind(this)}></FormLogin>
                            <code className={classes.copyright}>Copyright (c) 2018 Agencia Boliviana de Correos - AGBC</code>
                        </Paper>                        
                    </main>
                </div>               
            </React.Fragment>
        )
    }
}

PageLogin.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object,
};

export default withStyles(styles)(PageLogin);