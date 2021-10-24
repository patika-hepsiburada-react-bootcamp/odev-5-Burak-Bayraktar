import { Dispatch, SetStateAction } from 'react';
import { ITodo, ISelectedItem } from './index';

export interface ITodoContext {
    toDoList: ITodo[],
    setToDoList: Dispatch<SetStateAction<ITodo[]>>,
    selectedItem: ISelectedItem,
    setSelectedItem: Dispatch<SetStateAction<ISelectedItem>>,
    itemsLeft: number,
    handleSetItemsValue: (value: ITodo[]) => void
}