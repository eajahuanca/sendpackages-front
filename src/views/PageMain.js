import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AuthService from './LoginPage/AuthService';

const style = {
    'textAlign': 'center'
}

class PageMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:{}
        };
    }

    componentDidMount(){
        AuthService.geInformationUser().then((user) => {
            this.setState({ user })
        }).catch(()=> {
            this.props.history.push('/login');
        });
    }
    render(){
        return (
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} style={ style }>
                    Pantalla Principal
                    <h1>{this.state.user.username}</h1>
                    <h2>{this.state.user.nombre_completo}</h2>
                </Grid>
            </Grid>
        );
    }
}

PageMain.propTypes = {
    history : PropTypes.object,
}
export default PageMain;