import { createColumnHelper } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import DataTable from '../../modules/clients/client_view/data-table/data-table.tsx';
import { Pagination } from '../../modules/clients/client_view/pagination';
import { Header } from '../../modules/clients/client_view/header';
import { TABLE_HEAD, TABLE_ROWS } from '../../shared/const/data.ts';

const statusColors: Record<any['status'], string> = {
  Запланировано: 'bg-blue-200',
  Идет: 'bg-orange-200',
  Завершено: 'bg-green-300',
};

export const TrainingSessionTable = () => {
  const [filter, setFilter] = useState('');

  const filteredData = useMemo(() => {
    return TABLE_ROWS.filter((row) =>
      row.module.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

  const columnHelper = createColumnHelper<any>();

  const columns = useMemo(
    () => [
      columnHelper.accessor('date', {
        header: () => TABLE_HEAD[0],
        cell: (info) => info.getValue(),
        size: 200,
      }),
      columnHelper.accessor('status', {
        header: () => TABLE_HEAD[1],
        cell: (info) => (
          <span
            className={`px-2 py-1 rounded-full font-light text-slate-900 ${statusColors[info.getValue()]}`}
          >
            {info.getValue()}
          </span>
        ),
        size: 100,
      }),
      columnHelper.accessor('module', {
        header: () => TABLE_HEAD[2],
        cell: (info) => info.getValue(),
        size: 400,
      }),
      columnHelper.accessor('sessionType', {
        header: () => TABLE_HEAD[3],
        cell: (info) => info.getValue(),
        size: 100,
      }),
      columnHelper.accessor('room', {
        header: () => TABLE_HEAD[4],
        cell: (info) => info.getValue(),
        size: 250,
      }),
      columnHelper.accessor('group', {
        header: () => TABLE_HEAD[5],
        cell: (info) => info.getValue(),
        size: 100,
      }),
    ],
    [],
  );

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 15,
  });

  const paginatedData = useMemo(() => {
    const startIndex = pagination.pageIndex * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, pagination]);

  const totalPages = Math.ceil(TABLE_ROWS.length / pagination.pageSize);

  const handlePageChange = (newPageIndex: number) => {
    setPagination((prev) => ({ ...prev, pageIndex: newPageIndex }));
  };

  return (
    <div className="relative h-screen bg-white p-2 rounded-xl">
      <div className="h-screen w-full top-0 left-0 relative">
        <Header
          title="Учебные сессии"
          onFilterChange={(value) => setFilter(value)}
          onCreateClick={() => console.log('1')}
        />
        <DataTable
          columns={columns}
          keyId="id"
          data={paginatedData}
          noResult={
            <div className="w-full flex flex-col items-center  gap-2 text-sm leading-4 mt-10">
              <span className="font-bold">No results</span>
              <span className="font-medium">not found</span>
            </div>
          }
        />
        <Pagination
          pageIndex={pagination.pageIndex}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
