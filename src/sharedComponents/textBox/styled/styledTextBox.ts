import styled from 'styled-components';
import { color } from '../../../common/styled/palette';

export const StyledTextBox = styled.div<{isActive: boolean, isVisited: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all .2s ease;
    position: relative;
    
    margin-bottom: ${p => p.isActive
    ? '500px'
    : p.isVisited
        ? '40px'
        : '25px'
};
    
    &:first-child {
        margin-top: 110px;
    }
`

export const StyledTitle = styled.label<{isActive: boolean, isVisited: boolean}>`
    display: flex;
    align-items: center;    
    cursor: ${p => p.isVisited ? 'pointer' : 'unset'};
    height: ${p => p.isActive ? '50px' : '40px'};
    font-size: ${p => p.isActive ? '20px' : '16px'};
    color: ${p => p.isActive ? color.dark : color.gray};
    position: relative;
    user-select: none;
    z-index: 0;
`

export const StyledInputWrapper = styled.div<{isActive: boolean}>`
    display: flex;
    flex-direction: column;
    max-height: ${p => p.isActive ? '300px' : '0px'};
    overflow: hidden;
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 1;
    background-color: #fff;
`

export const StyledInputText = styled.input`
    font-family: 'Poppins', sans-serif;
    border: 0;
    border-bottom: 2px solid ${color.primary};
    padding-bottom: 8px;
    outline: 0;    
    background-color: transparent;
    width: 480px;
    font-size: 20px;
    color: #333;
    letter-spacing: .5px;
    box-sizing: border-box;
    
    &:first-of-type {
        margin-bottom: 20px;
    }
    
    &::placeholder {
        color: #9191AE;
        font-weight: 300;
    }
`

export const StyledButton = styled.button<{value: string}>`
    position: relative;
    z-index: 1;
    margin-top: 50px;
    cursor: pointer;
    display: ${p => p.value === 'show' ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    border: 2px solid ${color.primary};
    letter-spacing: 1px;
    width: 170px;
    height: 50px;
    color: ${color.primary};
    background-color: #fff;
`


