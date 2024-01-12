import styled from 'styled-components';
import robot from './../../assets/robot.svg';
const Wrapper = styled.div`
    border-radius: 25px;
    width: 50px;
    height: 50px;
    background-image: url(${robot});
    transition: .5s linear;
    color: white;
    text-align:center;
    padding: 2px;
    display: none;
    background-repeat: no-repeat;
    background-size: 50px;
    `

export default Wrapper;