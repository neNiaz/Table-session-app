import { Table as ReactTable } from '@tanstack/react-table';
import { FooterGroupItem } from './components/FooterGroupItem';
import { TableFooter } from '../../../../../../../../shared/ui/table-footer/table-footer.tsx';

export interface Props<TData> {
  table: ReactTable<TData>;
}

export function DesktopTableFooter<TData>({ table }: Props<TData>) {
  return (
    <TableFooter>
      {table.getFooterGroups().map((footerGroup) => (
        <FooterGroupItem footerGroup={footerGroup} />
      ))}
    </TableFooter>
  );
}
