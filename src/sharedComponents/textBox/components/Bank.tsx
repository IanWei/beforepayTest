import React, { ChangeEvent, FC, useState } from 'react';
import { StyledButton, StyledInputText, StyledInputWrapper } from '../styled/styledTextBox';
import { TextBoxInnerProps } from '../types/TextBox';

export const Bank: FC<TextBoxInnerProps> = ({ isActive , handleClick, update, data}) => {
    const [bank, setBank] = useState(data.bank);
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBank(e.target.value)
    }
    return (
        <StyledInputWrapper isActive={isActive}>
            <StyledInputText placeholder='Bank' type='text' value={bank} onChange={handleOnChange} onBlur={() => update('bank', bank)}/>
            {data.bank && <StyledButton value='show' onClick={ () => handleClick( 3 ) }>
                Next
            </StyledButton> }
        </StyledInputWrapper>
    )
}
