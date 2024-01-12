import React from 'react';
import { PropTypes } from 'prop-types';

import Wrapper from './../../components/PlaceRobot/Wrapper';
import Button from './../../components/Button'

class Directions extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleRotateLeft = this.handleRotateLeft.bind(this);
        this.handleRotateRight = this.handleRotateRight.bind(this);
        this.handleMoveForward = this.handleMoveForward.bind(this);
    }
    handleRotateLeft() {
        this.props.left();
    }
    handleRotateRight() {        
        this.props.right();
    }
    handleMoveForward() {
        this.props.move();
    }
    render() {
        return(
            <Wrapper>
                <h4>Move and Directions</h4>
                <Button text='LEFT' onClick={this.handleRotateLeft}/>
                <Button text='MOVE' onClick={this.handleMoveForward}/>
                <Button text='RIGHT' onClick={this.handleRotateRight}/>
            </Wrapper>
        );
    }
}

Directions.propTypes = {
    rotateLeftCommand: PropTypes.func,
    rotateRightCommand: PropTypes.func,
    moveForwardCommand: PropTypes.func,
}

export default Directions;