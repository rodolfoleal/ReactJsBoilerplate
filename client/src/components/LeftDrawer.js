import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import { propTypes } from 'redux-form';

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      height: 56,
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
    divBottom: {
      position: 'absolute',
      bottom: 0,
      width: '100%'
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage: 'url(' + require('../images/material_bg.png') + ')',
        height: 85
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        fontSize: "120%",
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 500,
        textShadow: '1.3px 1.3px #444'
      }
    }
  };



  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}
      width={300}>
      <div style={styles.logo}>
        My Wishes
        </div>
      <div style={styles.avatar.div}>
        <Avatar src={props.avatar}
          size={80}
          style={styles.avatar.icon} />
        <span style={styles.avatar.span}>{props.username}</span>
      </div>
      <div>
        {props.menus.map((menu, index) =>
          <MenuItem
            key={index}
            style={styles.menuItem}
            primaryText={menu.text}
            leftIcon={menu.icon}
            containerElement={<Link to={menu.link} />}
          />
        )}
      </div>
      <div style={styles.divBottom}>
        <MenuItem
          key="logout"
          style={styles.menuItem}
          primaryText="Logout"
          leftIcon={<PermIdentity />}
          containerElement={<Link to="/logout" />}
        />
      </div>
    </Drawer >
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
  avatar: PropTypes.string
};

export default LeftDrawer;
