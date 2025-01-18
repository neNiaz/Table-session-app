import { Table as ReactTable } from '@tanstack/react-table';
import { HeaderGroupItem } from './components/HeaderGroupItem';
import { TableHeader } from '../../../../../../../../shared/ui/table-header';

export interface Props<TData> {
  table: ReactTable<TData>;
}

export function DesktopTableHeader<TData>({ table }: Props<TData>) {
  const headerGroups = table.getHeaderGroups();

  return (
    <TableHeader>
      {headerGroups.map((headerGroup) => (
        <HeaderGroupItem key={headerGroup.id} headerGroup={headerGroup} />
      ))}
    </TableHeader>
  );
}
