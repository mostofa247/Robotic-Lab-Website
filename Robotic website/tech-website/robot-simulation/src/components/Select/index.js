import React from 'react';
import { PropTypes } from 'prop-types';

import Wrapper from './../../components/Input/Wrapper';

class Select extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleSelectedOptions = this.handleSelectedOptions.bind(this);
    }

    handleSelectedOptions(evt) {
        evt.preventDefault();
        this.props.selectedOption(evt.target.value);
    }

    render() {
        return(
            <Wrapper>
                <select 
                    className={this.props.className}
                    onChange={this.handleSelectedOptions}
                >
                    <option value='0'>North</option>
                    <option value='90'>East</option>
                    <option value='180'>South</option>
                    <option value='270'>West</option>
                </select>
            </Wrapper>
        );
    }
}

Select.propTypes = {
    selectedOption: PropTypes.func,
}

export default Select;