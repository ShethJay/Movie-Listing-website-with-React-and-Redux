import React from 'react';
import { connect } from 'react-redux';
import { toggleMessage } from '../toggle/actions';
import {bindActionCreators} from 'redux';

const Toggle = ({ messageVisibility, toggleMessage,}) => (
    <div>
        {
            messageVisibility &&
            <p>This text will be dispalyed is messageVisibility is true</p>
        }
        <button 
        onClick={toggleMessage}>Toggle ME</button>
    </div>
);
const mapStateToProps = state => ({
    messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleMessage,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);