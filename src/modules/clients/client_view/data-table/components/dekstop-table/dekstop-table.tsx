import { Row, Table as ReactTable } from '@tanstack/react-table';
import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  Ref,
  useContext,
  useId,
} from 'react';
import { DataTableContext } from '../date-table-provider';
import { Table } from '../../../../../../shared/ui/table';
import { cn } from '../../../../../../shared/hooks';
import { DesktopTableBody } from './components/DesktopTableBody';
import { DesktopTableHeader } from './components/DesktopTableHeader';
import { DesktopTableFooter } from './components/DesktopTableFooter';
import { DesktopTableLoading } from './components/DesktopTableLoading';

export interface Props<TData> {
  table: ReactTable<TData>;
  onRowClick?: (rowId: Row<TData>) => void;
  noResult?: React.ReactNode;
  isFooter?: boolean;
}

function Component<TData>(
  { isFooter, noResult, table, onRowClick }: Props<TData>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const id = useId();
  const { classNames, isLoading } = useContext(DataTableContext);

  return (
    <div className="relative w-full h-[90%]">
      <Table
        className={cn(
          'max-h-[95%] text-sm font-medium border border-outline-1 rounded-t-lg bg-white',
          classNames?.root,
        )}
        ref={ref}
      >
        <DesktopTableHeader table={table} />

        <DesktopTableBody
          noResult={noResult}
          table={table}
          onRowClick={onRowClick}
          key={id}
        />

        {isFooter && <DesktopTableFooter table={table} />}
      </Table>

      {isLoading && <DesktopTableLoading />}
    </div>
  );
}

export const DesktopTable = forwardRef(Component) as <TData>(
  props: Props<TData> & { ref?: Ref<HTMLDivElement> },
) => ReactElement;
