import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends React.Component {
    componentWillMount() {
        this.props.signinWithJwt(this.props.location.query.token);
    }

    render() {
        return <div> Nice to see you here...</div>;
    }
}

export default connect(null, actions)(Signin);