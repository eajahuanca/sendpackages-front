import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
    form: {
        width:'100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class FormLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onUsernameChange({ target }){
        this.setState({ username: target.value });
    }

    onPasswordChange({ target }){
        this.setState({ password: target.value });
    }

    onSubmitForm(eve){
        eve.preventDefault();
        this.props.onSubmit({
            username: this.state.username,
            password: this.state.password
        });
    }

    render(){
        const {classes } = this.props;
        return (
            <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="username">Cuenta de Usuario</InputLabel>
                    <Input id="username" name="username" autoComplete="username" value={ this.username } autoFocus onChange={this.onUsernameChange.bind(this)}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Constraseña</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.onPasswordChange.bind(this)}/>
                </FormControl>
                <FormControlLabel control={ <Checkbox value="remember" color="primary"/>} label="Recordarme"/>
                <Button type="submit" fullWidth variant="contained" color="secondary" className="{classes.submit}" onClick={this.onSubmitForm.bind(this)}>
                    <b>INGRESAR</b>
                    <ChevronRight className={classes.rightIcon}/>
                </Button>
            </form>
        )
    }
}

FormLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormLogin);