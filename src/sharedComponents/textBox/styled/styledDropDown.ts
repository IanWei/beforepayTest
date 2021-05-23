import styled from 'styled-components';
import { color } from '../../../common/styled/palette';

export const StyledDropDown = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledSelectWrapper = styled.div<{selected: boolean}>`
    cursor: ${p => p.selected ? 'pointer' : 'unset'};
    background-color: ${p => p.selected ? '#F5F5FB' : '#fff'};
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: ${p => p.selected ? '20px' : 0};
    padding: ${p => p.selected ? '20px' : 0};
    border: ${p => p.selected ? `2px solid ${color.primary}` : '0'};
    border-bottom: 2px solid ${color.primary};    
    transition: all .2s ease;
    width: 480px;
`

export const StyledSelect = styled.input`
    position: relative;
    font-family: 'Poppins', sans-serif;
    border: 0;
    padding-bottom: 8px;
    outline: 0;    
    background-color: transparent;
    font-size: 20px;
    color: #333;
    letter-spacing: .5px;
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;       
    caret-color: transparent;
    
    &::placeholder {
        color: #9191AE;
        font-weight: 300;
    }
`
export const StyledOptions = styled.ul<{open: boolean}>`
    list-style: none;
    background-color: #F5F5FB;    
    max-height: ${p => p.open ? '80px' : '0px'};
    overflow: hidden;
    transition: max-height .2s ease;
`

export const StyledOption = styled.li`
    cursor: pointer;
    border-bottom: 1px solid ${color.grayLight};
    padding: 8px;
    font-size: 16px;
    color: ${color.gray};
`

export const StyledSelectTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    color: ${color.primary};
    margin-bottom: 2px;
    user-select: none;
`

export const StyledSelectDescription = styled.p`
    font-size: 16px;
    color: ${color.primary};
    user-select: none;
`

export const StyledChevronWrapper = styled.div<{open: boolean}>`
    position: absolute;
    right: 10px;
    top: 50%;
    transition: all .2s ease;
    transform: ${p => p.open ? 'translateY(-50%) rotate(90deg)' : 'translateY(-50%)'};
    
    svg {
        path {
            stroke: ${color.secondary};        
        }
    }
`
