import React from 'react';
import { PropTypes }  from 'prop-types';

import Wrapper from './Wrapper';

class Input extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(evt) {
        this.props.inputValue(evt.target.value);
    }

    render() {
        return(
            <Wrapper>
                <input 
                    type='number'
                    min='0'
                    max='4'
                    onChange={this.handleOnChange}
                    placeholder={this.props.placeholder} 
                    className={this.props.className}
                    style={{width:'100%'}}
                />
            </Wrapper>
        );
    }
}

Input.propTypes = {
    inputValue: PropTypes.func,
}

export default Input;