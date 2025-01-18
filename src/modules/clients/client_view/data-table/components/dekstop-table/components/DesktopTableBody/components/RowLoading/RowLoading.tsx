import { forwardRef } from 'react';

interface Props {
  colsLength: number;
}

export const RowLoading = forwardRef<HTMLTableRowElement, Props>(
  ({ colsLength }, ref) => {
    return (
      <tr ref={ref}>
        <td colSpan={colsLength + 2}>loading...</td>
      </tr>
    );
  },
);
