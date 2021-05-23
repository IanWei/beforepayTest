import React, { FC, useEffect, useState } from 'react';
import { StyledTextBox, StyledTitle } from '../styled/styledTextBox';
import { TextBoxProps } from '../types/TextBox';
import { Signup } from './Signup';
import { Employment } from './Employment';
import { Bank } from './Bank';
import { Identity } from './Identity';

export const TextBox: FC<TextBoxProps> = ({ title, type, index, active, prevActive, handleClick, update, data, handleSave }: TextBoxProps) => {
    const [isActive, setIsActive] = useState(prevActive);

    useEffect(() => {
        setIsActive(active)
    }, [active, setIsActive])

    let Component: React.ComponentType;
    switch ( type ) {
        case 'signup':
            Component = () => <Signup data={data} isActive={index === isActive} handleClick={handleClick} update={update} />;
            break;
        case 'employment':
            Component = () => <Employment data={data} isActive={index === isActive} handleClick={handleClick} update={update} />;
            break;
        case 'bank':
            Component = () => <Bank data={data} isActive={index === isActive} handleClick={handleClick} update={update} />
            break;
        case 'id':
            Component = () => <Identity data={data} isActive={index === isActive} handleClick={handleClick} update={update} handleSave={handleSave} />
            break;
    }
    return (
        <StyledTextBox key={index} isActive={index === isActive} isVisited={index <= isActive}>
            <StyledTitle isActive={index === isActive} isVisited={index <= isActive} onClick={index <= isActive ? () => handleClick(index) : () => {}}>
                {title}
            </StyledTitle>
            <Component />
        </StyledTextBox>
    )
}
