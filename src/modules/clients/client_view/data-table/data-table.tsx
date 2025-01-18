'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  FilterFnOption,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';

import React, { ReactNode, useEffect, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { DataTableProvider } from './components/date-table-provider';
import { DesktopTable } from './components/dekstop-table';

export interface ClassNames {
  root?: string;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  renderItemMobile?: (value: TData, index: number) => ReactNode;
  data: TData[];
  globalFilterFn?: FilterFnOption<TData>;
  filter?: {
    columns?: ColumnFiltersState;
    global?: string;
  };
  isFooter?: boolean;
  isLoading?: boolean;
  sortBy?: SortingState;
  noResult?: React.ReactNode;
  noResultMobile?: React.ReactNode;
  classNames?: ClassNames;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  keyId?: string;
  onRowClick?: (rowId: Row<TData>) => void;
}

const DataTable = <TData extends any, TValue extends any>({
  columns,
  data,
  filter,
  noResult,
  globalFilterFn,
  sortBy,
  classNames,
  keyId,
  isFooter = false,
  isLoading = false,
  fetchNextPage = () => null,
  hasNextPage = false,
  onRowClick,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>(sortBy ? sortBy : []);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    filter?.columns ? filter.columns : [],
  );
  const [globalFilter, setGlobalFilter] = useState<string>(
    filter?.global ? filter?.global : '',
  );
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const additionalOption: Omit<
    TableOptions<TData>,
    'data' | 'columns' | 'getCoreRowModel'
  > = {};

  if (globalFilterFn) {
    additionalOption.globalFilterFn = globalFilterFn;
  }

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      isWithinDateRange: () => console.log('isWithinDateRange') as any,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      globalFilter,
      columnFilters,
      pagination,
    },
    enableGlobalFilter: true,
    ...additionalOption,
  });

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 35,
    overscan: 20,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  const providerValue = {
    classNames,
    paddingTop,
    paddingBottom,
    virtualRows,
    columns,
    fetchNextPage,
    hasNextPage,
    keyId,
    isLoading,
  };

  useEffect(() => {
    if (filter?.columns !== undefined && filter?.columns !== columnFilters) {
      setColumnFilters(filter?.columns);
    }
    if (filter?.global !== undefined && filter?.global !== globalFilter) {
      setGlobalFilter(filter.global);
    }
  }, [filter]);

  useEffect(() => {
    if (sortBy !== undefined && sortBy !== sorting) {
      setSorting(sortBy);
    }
  }, [sortBy]);

  return (
    <DataTableProvider value={providerValue}>
      <DesktopTable
        table={table}
        ref={tableContainerRef}
        onRowClick={onRowClick}
        noResult={noResult}
        isFooter={isFooter}
      />
    </DataTableProvider>
  );
};

export default DataTable;
