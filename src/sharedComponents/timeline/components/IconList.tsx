import React, { FC } from 'react';
import { BankIcon, CardIcon, CircleTickIcon, EmploymentIcon } from '../../../common/assets';
import { iconWrapper } from './IconWrapper';
import { IconListProps } from '../types/TimeLine';

export const IconList: FC<IconListProps> = ({active, prevActive, handleClick}) => {
    const icons = [CircleTickIcon, EmploymentIcon, BankIcon, CardIcon];
    const components = icons.map((icon, index) => iconWrapper(icon, index, active, prevActive, handleClick));
    return (
        <>
            {components.map((Component, index) => <Component key={index}/>)}
        </>
    )
}
