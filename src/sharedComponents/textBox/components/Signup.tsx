import React, { ChangeEvent, FC, useState } from 'react';
import { TextBoxInnerProps } from '../types/TextBox';
import { StyledButton, StyledInputText, StyledInputWrapper } from '../styled/styledTextBox';

export const Signup: FC<TextBoxInnerProps> = ( { isActive , handleClick, update, data}) => {
    const [email, setEmail] = useState(data.email);
    const [password, setPassword] = useState(data.password);
    const handleOnChange = (type: string) => (e: ChangeEvent<HTMLInputElement>) => {
        type === 'email'
            ? setEmail(e.target.value)
            : setPassword(e.target.value);
    }
    return (
        <StyledInputWrapper isActive={isActive}>
            <StyledInputText placeholder='email' type='email' value={email} onChange={handleOnChange('email')} onBlur={() => update('email', email)}/>
            <StyledInputText placeholder='password' type='password' value={password} onChange={handleOnChange('password')} onBlur={() => update('password', password)}/>
            {data.email && data.password && <StyledButton value='show' onClick={ () => handleClick( 1 ) }>
                Next
            </StyledButton> }
        </StyledInputWrapper>
    )
}
