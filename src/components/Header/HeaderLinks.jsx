import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Search from "@material-ui/icons/Search";
import Looks from '@material-ui/icons/Looks';
// core components
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";
import AuthService from 'views/LoginPage/AuthService';

class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      open: false,
      value: 0
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    localStorage.removeItem('tkn');
    window.location.reload();
  };

  componentDidMount() {
    AuthService.geInformationUser().then((user) => {
      this.setState({ user })
    }).catch(() => {
      this.props.history.push('/login');
    });
  }

  handleLogout = async event => {
    localStorage.removeItem('tkn');
    window.location.reload(); 
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Buscar" icon={<Search />} />
          <BottomNavigationAction label={this.state.user.username} icon={<Person />} />
          <BottomNavigationAction label="Salir" icon={<Looks />} onClick={this.handleLogout} />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);