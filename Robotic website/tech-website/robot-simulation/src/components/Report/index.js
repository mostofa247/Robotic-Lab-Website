import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper from './../../components/PlaceRobot/Wrapper';
import Button from './../../components/Button';
class Report extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isReportAvailable : false
        }
        this.handleDirections = this.handleDirections.bind(this);
        this.handleReportCommand = this.handleReportCommand.bind(this);
    }

    handleReportCommand() {
        if(!this.props.isPlaced) {
            return;
        }else {
            this.setState({isReportAvailable:true});
        }
    }
    handleDirections() {
        const direction = this.props.facePosition % 360;
        
        if (direction === 0 || direction === 1 || direction === -1) {
            return 'North';
        } else if (direction === 90 || direction === -270) {
            return 'East';
        } else if (direction === 180 || direction === -180) {
            return 'South';
        } else if (direction === 270 || direction === -90) {
            return 'West';
        }        
    }
    
    render() {
        return(
            <Wrapper>
                <h4>Report Robot Position</h4>
                <h5 style={{float:'left', padding:'0px 30px 0px 0px'}}>X: {this.state.isReportAvailable ? this.props.xPosition : ''}</h5>
                <h5 style={{float:'left', padding:'0px 30px 0px 0px'}}>Y: {this.state.isReportAvailable ? this.props.yPosition : ''}</h5>
                <h5 style={{float:'left'}}>Facing: {this.state.isReportAvailable ? this.handleDirections() : ''} </h5>
                <Button onClick={this.handleReportCommand} text='REPORT'/>
            </Wrapper>
        );
    }
}

Report.propTypes = {
    xPosition: PropTypes.number,
    yPosition: PropTypes.number,
    facePosition: PropTypes.number,
    isPlaced: PropTypes.bool
}

export default Report;