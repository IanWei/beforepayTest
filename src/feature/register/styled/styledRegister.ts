import styled from 'styled-components';
import { color } from '../../../common/styled/palette';

export const StyledRegister = styled.div`
    display: flex;
    flex-direction: row;
    width: 1400px;
    height: 875px;
    margin: 20px auto 0;
    position: relative;
`
export const StyledLeftPane = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;
    background: linear-gradient(-45deg, ${color.primary} 30%, ${color.primaryLight} 50%, ${color.primary} 70%);
    text-align: right;    
    padding-right: 40px;
`

export const StyledLogo = styled.div`
    margin-top: 180px;
    margin-bottom: 80px;
    color: #fff;
    font-size: 36px;
    user-select: none;
`

export const StyledIntro = styled.p`
    margin-left: auto; 
    color: ${color.grayLight};
    font-size: 14px;
    font-style: italic;
    width: 180px;
    user-select: none;
    
    &:not(:last-child) {
        margin-bottom: 30px;
    }
`

export const StyledRightPane = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    width: 100%;
`

export const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;    
`
export const StyledQuestionWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: help;
`
