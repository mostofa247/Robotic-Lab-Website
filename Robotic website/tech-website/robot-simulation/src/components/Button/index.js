import React from 'react';

import Wrapper from './Wrapper';

class Button extends React.PureComponent {
    render() {

        return(
            <Wrapper onClick={this.props.onClick}> {this.props.text} </Wrapper>
        );
    }
}

export default Button;