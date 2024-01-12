import React from 'react';

import Wrapper from './Wrapper';
import Square from './../../components/Square';


class Row extends React.PureComponent {

    render() {
        return(
            <Wrapper>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </Wrapper>
        );
    }
}

export default Row;