import { Data, InputType } from '../../../feature/register/types/Register';

export type Type = 'signup' | 'employment' | 'bank' | 'id'

export interface TextBoxListProps extends TextBase {
    active: number,
    prevActive: number
}

export interface TextBoxProps extends TextBase {
    title: string,
    type: Type,
    index: number,
    active: number,
    prevActive: number
}

export interface TextBoxInnerProps extends TextBase {
    isActive: boolean,
}

export interface TextBase {
    data: Data,
    handleClick(index: number): void,
    update(type: InputType, value: string): void
    handleSave?(): void,
}

export interface DropDownProps extends Pick<TextBase, 'update' | 'data'> {}

