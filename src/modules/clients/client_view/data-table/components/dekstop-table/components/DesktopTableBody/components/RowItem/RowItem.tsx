import { flexRender, Row } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/react-virtual';
import { TableRow } from '../../../../../../../../../../shared/ui/table-row';
import { TableCell } from '../../../../../../../../../../shared/ui/table-cell';
import { cn } from '../../../../../../../../../../shared/hooks';
import { useRef } from 'react';

interface Props<TData> {
  row: Row<TData>;
  virtualRow: VirtualItem;
  rowsLength: number;
  onRowClick?: (rowId: Row<TData>) => void;
}

export function RowItem<TData>({
  virtualRow,
  row,
  rowsLength,
  onRowClick,
}: Props<TData>) {
  const cells = row.getVisibleCells();
  const ref = useRef<HTMLTableRowElement>(null);

  const getPadding = (index: number) => {
    if (cells.length - 1 == index) {
      return 'pl-3';
    }
    if (index == 0) {
      return 'pr-3';
    }
    return 'px-3';
  };

  const onClickHandler = () => {
    onRowClick?.(row);
    return;
  };

  return (
    <TableRow
      key={row.id}
      data-state={row.getIsSelected() && 'selected'}
      ref={ref}
      rowIndex={virtualRow.index}
    >
      {cells.map((cell, index) => (
        <TableCell
          key={cell.id}
          onClick={onClickHandler}
          className={cn(
            getPadding(index),
            rowsLength - 1 == virtualRow.index && 'border-b-0',
            !!onRowClick && 'cursor-pointer',
          )}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
}
