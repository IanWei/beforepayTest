import React, { useEffect, useState } from 'react';
import { StyledIconWrapper } from '../styled/styledTimeLine';

export const iconWrapper = <P extends object>( Component: React.ComponentType<P>, index: number, active: number, prevActive: number, onClick: (index: number) => void) => ({...props}) => {
    const [isActive, setIsActive] = useState(prevActive);
    useEffect(() => {
        setIsActive(active)
    }, [setIsActive])
    return (
        <StyledIconWrapper key={index} onClick={index <= isActive ? () => onClick(index) : () => {}} isActive={index === isActive} isVisited={index <= isActive}>
            <Component {...props as P} />
        </StyledIconWrapper>
    )
}
