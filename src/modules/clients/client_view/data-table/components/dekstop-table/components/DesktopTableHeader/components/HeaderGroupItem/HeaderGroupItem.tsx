import { HeaderGroup } from '@tanstack/react-table';
import { HeaderGroupItemCol } from '../HeaderGroupItemCol';
import { TableRow } from '../../../../../../../../../../shared/ui/table-row';

interface Props<TData> {
  headerGroup: HeaderGroup<TData>;
}

export function HeaderGroupItem<TData>({ headerGroup }: Props<TData>) {
  const headerCols = headerGroup.headers;

  const getPadding = (index: number) => {
    if (headerCols.length - 1 == index) {
      return 'pl-3';
    }
    if (index == 0) {
      return 'pr-3';
    }
    return 'px-3';
  };

  return (
    <TableRow
      key={headerGroup.id}
      classNames={{
        firstTh: 'border-b',
        lastTh: 'border-b',
      }}
      isHeader
    >
      {headerCols.map((header, index) => (
        <HeaderGroupItemCol
          key={header.id}
          header={header}
          className={getPadding(index)}
        />
      ))}
    </TableRow>
  );
}
