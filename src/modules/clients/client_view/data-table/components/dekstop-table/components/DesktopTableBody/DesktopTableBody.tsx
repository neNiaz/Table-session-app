import { Row, Table as ReactTable } from '@tanstack/react-table';
import React, { useContext, useEffect, useRef } from 'react';
import { EmptyItem } from './components/EmptyItem';
import { NoResult } from './components/NoResult';
import { RowItem } from './components/RowItem';
import { RowLoading } from './components/RowLoading';
import { DataTableContext } from '../../../date-table-provider';
import { TableBody } from '../../../../../../../../shared/ui/table-body';
import { useIntersectionObserver } from '../../../../../../../../shared/hooks/useIntersectionObserver';

export interface Props<TData> {
  table: ReactTable<TData>;
  onRowClick?: (rowId: Row<TData>) => void;
  noResult?: React.ReactNode;
}

export function DesktopTableBody<TData>({
  table,
  noResult,
  onRowClick,
}: Props<TData>) {
  const loadRef = useRef<HTMLTableRowElement>(null);
  const entry = useIntersectionObserver(loadRef, {});
  const isLoaderVisible = !!entry?.isIntersecting;

  const {
    paddingTop,
    paddingBottom,
    virtualRows,
    columns,
    hasNextPage,
    fetchNextPage,
  } = useContext(DataTableContext);

  const { rows } = table.getRowModel();
  const isData = rows.length > 0;

  useEffect(() => {
    if (isLoaderVisible) {
      fetchNextPage();
    }
  }, [isLoaderVisible]);

  return (
    <TableBody>
      {paddingTop > 0 && (
        <EmptyItem
          height={paddingTop}
          cellsLength={rows[0].getVisibleCells().length}
        />
      )}
      {isData ? (
        virtualRows.map((virtualRow, index) => (
          <RowItem
            onRowClick={onRowClick}
            virtualRow={virtualRow}
            row={rows[virtualRow.index]}
            rowsLength={table.getRowModel().rows?.length}
            key={index}
          />
        ))
      ) : (
        <NoResult colsLength={columns.length} CustomComponent={noResult} />
      )}
      {paddingBottom > 0 && (
        <EmptyItem
          height={paddingBottom}
          cellsLength={rows[0].getVisibleCells().length}
        />
      )}

      {hasNextPage && <RowLoading colsLength={columns.length} ref={loadRef} />}
    </TableBody>
  );
}
