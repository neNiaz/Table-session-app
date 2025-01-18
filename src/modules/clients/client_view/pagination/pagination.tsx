import React, { useMemo } from 'react';
import { Button } from '../../../../shared/ui/Button';

interface PaginationProps {
  pageIndex: number;
  totalPages: number;
  onPageChange: (pageIndex: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  totalPages,
  onPageChange,
}) => {
  const paginationButtons = useMemo(() => {
    const buttons: (number | string)[] = [];
    buttons.push(0);

    if (pageIndex > 3) {
      buttons.push('...');
    }

    const startPage = Math.max(1, pageIndex - 1);
    const endPage = Math.min(totalPages - 2, pageIndex + 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    if (pageIndex < totalPages - 4) {
      buttons.push('...');
    }

    buttons.push(totalPages - 1);

    return buttons;
  }, [pageIndex, totalPages]);

  return (
    <div className="absolute w-full flex space-x-2 h-fit px-2 py-2 bg-gray-100 rounded-br-md rounded-bl-md bottom-3.5 items-center">
      <Button
        className="!w-8 !h-8 !bg-white rounded-md !text-gray-600 hover:bg-gray-200 disabled:opacity-50 transition-all duration-300"
        disabled={pageIndex === 0}
        onClick={() => onPageChange(pageIndex - 1)}
        size={'sm'}
      >
        &lt;
      </Button>
      {paginationButtons.map((button, index) => {
        if (button === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="w-8 h-8 flex items-center justify-center text-gray-400"
            >
              ...
            </span>
          );
        }

        return (
          <Button
            key={button}
            size={'sm'}
            variant={'text'}
            className={`!w-8 !h-8 flex items-center justify-center rounded-md border transition-all duration-300 ${
              pageIndex === button
                ? '!border-blue-600 !text-blue-600'
                : 'border-transparent !text-gray-600 hover:!bg-gray-200 hover:!border-gray-300'
            }`}
            onClick={() => onPageChange(button as number)}
          >
            {(button as number) + 1}
          </Button>
        );
      })}
      <Button
        className="!w-8 !h-8 flex items-center justify-center rounded-md !bg-white !text-gray-600 hover:!bg-gray-200 disabled:opacity-50 transition-all duration-300"
        disabled={pageIndex + 1 === totalPages}
        size={'sm'}
        onClick={() => onPageChange(pageIndex + 1)}
      >
        &gt;
      </Button>
    </div>
  );
};
