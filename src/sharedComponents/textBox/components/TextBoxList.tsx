import React, { FC } from 'react';
import { TextBox } from './TextBox';
import { TextBoxListProps, Type } from '../types/TextBox';

const defaultTextBoxes: { title: string, type: Type }[] = [
    {
        title: 'Sign Up',
        type: 'signup'
    },
    {
        title: 'Employment details',
        type: 'employment'
    },
    {
        title: 'Bank connection',
        type: 'bank'
    },
    {
        title: 'ID Check',
        type: 'id'
    }
]

export const TextBoxList: FC<TextBoxListProps> = ({ active, prevActive, handleClick, update, data, handleSave }: TextBoxListProps) => {
    return (
        <>
            {defaultTextBoxes.map((el, index) => <TextBox data={data} key={index} title={el.title} type={el.type} index={index} active={active} prevActive={prevActive} handleClick={handleClick} update={update} handleSave={handleSave} />)}
        </>
    )
}
