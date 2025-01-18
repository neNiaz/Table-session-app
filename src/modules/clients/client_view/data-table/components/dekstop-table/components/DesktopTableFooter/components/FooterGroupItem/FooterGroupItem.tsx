import { flexRender, HeaderGroup } from '@tanstack/react-table';
import { cn } from '../../../../../../../../../../shared/hooks';
import { TableRow } from '../../../../../../../../../../shared/ui/table-row';
import { TableHead } from '../../../../../../../../../../shared/ui/table-head/table-head.tsx';

interface Props {
  footerGroup: HeaderGroup<any>;
}

export const FooterGroupItem: React.FC<Props> = ({ footerGroup }) => {
  return (
    <TableRow key={footerGroup.id} isHeader className="bg-background-2">
      {footerGroup.headers.map((header) => (
        <TableHead
          key={header.id}
          style={{ width: header.getSize() }}
          className={cn('border-outline-1')}
        >
          <div
            {...{
              className: `flex items-center h-full
                        ${header.column.getCanSort()}
                        `,
            }}
          >
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.footer, header.getContext())}
          </div>
        </TableHead>
      ))}
    </TableRow>
  );
};
