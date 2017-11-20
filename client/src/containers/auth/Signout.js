import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends React.Component {
    componentWillMount() {
        this.props.SignoutUser();
    }

    render() {
        return <div> Sorry to see you go...</div>;
    }
}

export default connect(null, actions)(Signout);