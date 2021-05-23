import styled from 'styled-components';
import { color } from '../../../common/styled/palette';

export const StyledTimeLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    position:relative;
`

export const StyledLine = styled.div`
    z-index: 0;
    left: 50%;
    position: absolute;
    height: 100%;
    width: 2px;
    background: linear-gradient(to bottom, ${color.secondary}, ${color.primary});
`

export const StyledIconWrapper = styled.div<{isActive: boolean, isVisited: boolean}>`
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    height: ${p => p.isActive ? '50px' : '40px'};
    width: ${p => p.isActive ? '50px' : '40px'};
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #fff;
    cursor: ${p => p.isVisited ? 'pointer' : 'unset'};
    transition: all .2s ease;
    transform-origin: center;   
    z-index: 1;
    margin-bottom: ${p => p.isActive 
        ? '500px' 
        : p.isVisited
            ? '40px'
            : '25px'
    };
    border: 1px solid ${p => p.isVisited ? color.secondary : color.primary};    
    
    &:first-child {
        margin-top: 110px;
    }
    
    svg {    
        transition: fill .2s ease;
        fill: ${p => p.isVisited ? color.secondary : color.primary};
    }
`
