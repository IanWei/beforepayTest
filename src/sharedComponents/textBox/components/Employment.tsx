import React, { FC } from 'react';
import { StyledButton, StyledInputWrapper } from '../styled/styledTextBox';
import { DropDown } from './DropDown';
import { TextBoxInnerProps } from '../types/TextBox';

export const Employment: FC<TextBoxInnerProps> = ({isActive, handleClick, data, update}) => {
    return (
        <StyledInputWrapper isActive={isActive}>
            <DropDown update={update} data={data}/>
            {data.status &&  <StyledButton value='show' onClick={ () => handleClick( 2 ) }>
                Next
            </StyledButton> }
        </StyledInputWrapper>
    )
}
