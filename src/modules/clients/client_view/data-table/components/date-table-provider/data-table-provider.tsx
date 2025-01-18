import { ColumnDef } from '@tanstack/react-table';
import { createContext } from 'react';
import { VirtualItem } from '@tanstack/react-virtual';
import { ClassNames } from '../../data-table';

type DataTableContextType<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  classNames?: ClassNames;
  paddingTop: number;
  paddingBottom: number;
  virtualRows: VirtualItem[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;
  keyId?: string;
};

const defaultState = {
  paddingTop: 0,
  paddingBottom: 0,
  columns: [],
  virtualRows: [],
  fetchNextPage: () => null,
  isLoading: false,
  hasNextPage: false,
};

export const DataTableContext =
  createContext<DataTableContextType<any, any>>(defaultState);
export const DataTableProvider = DataTableContext.Provider;
