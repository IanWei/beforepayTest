import React, { ChangeEvent, FC, useState } from 'react';
import { StyledButton, StyledInputText, StyledInputWrapper } from '../styled/styledTextBox';
import { TextBoxInnerProps } from '../types/TextBox';

export const Identity: FC<TextBoxInnerProps> = ({ isActive , data, update, handleSave}) => {
    const [id, setId] = useState(data.id);
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }
    return (
        <StyledInputWrapper isActive={isActive}>
            <StyledInputText placeholder='Check identity' type='text' value={id} onChange={handleOnChange} onBlur={() => update('id', id)}/>
            {data.id && <StyledButton value='show' onClick={ handleSave }>
                Save
            </StyledButton> }
        </StyledInputWrapper>
    )
}
