import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper from './Wrapper';

class Robot extends React.PureComponent { // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        const robot = document.getElementById('robot');
        if (!nextProps.isPlaced) {
            robot.style.display = 'none';
            return
        }

        let xPos = nextProps.xPosition * 100 + 25;
        let yPos = nextProps.yPosition * 100 + 25;
        robot.style.display = 'block';
        robot.style.transform = 'translate('+xPos+'px,'+yPos+'px) rotate('+nextProps.facePosition+'deg)'; 
    }

    render() {
        return(
            <Wrapper id='robot'></Wrapper>
        );
    }
}

Robot.propTypes = {
    xPosition: PropTypes.number,
    yPosition: PropTypes.number,
    facePosition: PropTypes.number,
    isPlaced: PropTypes.bool
}


export default Robot;