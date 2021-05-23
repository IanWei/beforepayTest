import React, { FC } from 'react';
import { TimeLineProps } from '../types/TimeLine';
import { StyledLine, StyledTimeLine } from '../styled/styledTimeLine';
import { IconList } from './IconList';

export const TimeLine: FC<TimeLineProps> = ({ active, prevActive, handleClick }) => {
    return (
        <StyledTimeLine>
            <IconList active={active} prevActive={prevActive} handleClick={handleClick}/>
            <StyledLine />
        </StyledTimeLine>
    )
}
