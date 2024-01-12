import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper from './Wrapper';

class Message extends React.PureComponent { // eslint-disable-next-line
    constructor(props) {
        super(props);
        //this.setMessage = this.setMessage.bind(this);
    }
    
    render() {
        console.log('message render>', this.props.mtype);
        return(
            <Wrapper>
                <span>{this.props.mtype || ''}</span>
            </Wrapper>
        );
    }
}
Message.propTypes = {
    mtype: PropTypes.string
}

export default Message;