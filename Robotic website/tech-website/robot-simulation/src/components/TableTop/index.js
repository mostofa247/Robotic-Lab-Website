import React from 'react';

import Wrapper from './Wrapper';
import Row from './../../components/Row';

class TableTop extends React.PureComponent {

    render() {
        return(
            <Wrapper>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
            </Wrapper>
        );
    }
}

export default TableTop;