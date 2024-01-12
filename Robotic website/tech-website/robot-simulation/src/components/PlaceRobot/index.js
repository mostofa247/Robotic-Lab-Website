import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper from './Wrapper';
import Input from './../../components/Input';
import Select from './../../components/Select';
import Button from './../../components/Button';

class PlaceRobot extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            X: 0,
            Y: 0,
            F: 0
        }
        this.handleOnInputXChange = this.handleOnInputXChange.bind(this);
        this.handleOnInputYChange = this.handleOnInputYChange.bind(this);
        this.handleSelectedFace = this.handleSelectedFace.bind(this);
        this.handlePlaceCommand = this.handlePlaceCommand.bind(this);
    }
    handleOnInputXChange(value) {
        this.setState({
            X: parseInt(value,10)
        })
    }
  
    handleOnInputYChange(value) {
        this.setState({
            Y: parseInt(value,10)
        })
    }
  
    handleSelectedFace(value) {
        this.setState({
            F: parseInt(value,10)
        })
    }
    handlePlaceCommand() {
        this.props.placeRobotPos(
            this.state.X,
            this.state.Y,
            this.state.F
        );
    }
    render() {
        return(
            <Wrapper>
                <h4>Place the Robot on table first</h4>
                <Input 
                    placeholder='X' 
                    className='input-x' 
                    inputValue={this.handleOnInputXChange}
                />
                <Input 
                    placeholder='Y' 
                    className='input-y' 
                    inputValue={this.handleOnInputYChange}
                />
                <Select 
                    className='select-face' 
                    selectedOption={this.handleSelectedFace}
                />
                <Button onClick={this.handlePlaceCommand} text='PLACE'/>
            </Wrapper>
        );
    }
}
PlaceRobot.propTypes = {
    placeRobotPos: PropTypes.func
}
export default PlaceRobot;