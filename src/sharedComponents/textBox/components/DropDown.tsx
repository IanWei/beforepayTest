import React, { FC, useRef, useState } from 'react';
import {
    StyledChevronWrapper,
    StyledDropDown,
    StyledOption,
    StyledOptions,
    StyledSelect, StyledSelectDescription, StyledSelectTitle,
    StyledSelectWrapper
} from '../styled/styledDropDown';
import { ChevronRightIcon } from '../../../common/assets';
import { DropDownProps } from '../types/TextBox';

export const DropDown: FC<DropDownProps> = ({update, data}) => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(data.status);
    const selectRef = useRef<HTMLInputElement>(null);
    const title = status === 'full-time'
        ? 'Full Time'
        : 'Part Time'
    const description = status === 'full-time'
        ? 'You work more than 38 hours per week'
        : 'Your work less than 38 hours per week'
    const handleOnClick = () => {
        setOpen(!open);
        selectRef.current && selectRef.current.blur();
    }
    const handleSelect = (value: string) => {
        setStatus(value);
        setOpen(false);
        update('status', value);
    }
    return (
        <StyledDropDown>
            <StyledSelectWrapper selected={!!status} onClick={!!status ? () => setOpen(!open) : () => {}}>
                {status
                    ? <>
                        <StyledSelectTitle>{title}</StyledSelectTitle>
                        <StyledSelectDescription>{description}</StyledSelectDescription>
                    </>
                    : <StyledSelect ref={selectRef} onClick={handleOnClick} placeholder='Employment status'/>
                }
                <StyledChevronWrapper open={open}>
                    <ChevronRightIcon />
                </StyledChevronWrapper>
            </StyledSelectWrapper>
            <StyledOptions open={open}>
                <StyledOption onClick={() => handleSelect('full-time')}>Full Time</StyledOption>
                <StyledOption onClick={() => handleSelect('part-time')}>Part Time</StyledOption>
            </StyledOptions>
        </StyledDropDown>
    )
}
