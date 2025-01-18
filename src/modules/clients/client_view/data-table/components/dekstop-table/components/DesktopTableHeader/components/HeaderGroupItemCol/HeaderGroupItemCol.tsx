import { flexRender, Header } from '@tanstack/react-table';
import { TableHead } from '../../../../../../../../../../shared/ui/table-head/table-head.tsx';
import { cn } from '../../../../../../../../../../shared/hooks';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface Props {
  header: Header<any, unknown>;
  className?: string;
}

export const HeaderGroupItemCol: React.FC<Props> = ({ header, className }) => {
  return (
    <TableHead
      key={header.id}
      colSpan={header.colSpan}
      style={{
        width: header.getSize(),
      }}
      className={cn('border-outline-1', 'border-b', className)}
    >
      <div
        {...{
          className: cn(
            'flex items-center h-full',
            `${header.column.getCanSort() && 'cursor-pointer select-none'}`,
            `${header.column.getIsSorted() && 'text-brand'}`,
          ),
          onClick: header.column.getToggleSortingHandler(),
        }}
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
        {{
          asc: <ChevronDownIcon className="h-4 w-4" />,
          desc: <ChevronUpIcon className="h-4 w-4" />,
        }[header.column.getIsSorted() as string] ?? null}
      </div>
    </TableHead>
  );
};
