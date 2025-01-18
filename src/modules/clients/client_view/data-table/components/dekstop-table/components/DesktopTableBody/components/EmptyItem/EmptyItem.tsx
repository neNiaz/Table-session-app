interface Props {
  height: number;
  cellsLength: number;
}

export const EmptyItem: React.FC<Props> = ({ height, cellsLength }) => {
  return (
    <tr className="bg-white" style={{ height: `${height}px` }}>
      <td className="w-[0%] p-0 pl-4 sm:pl-6" />
      {new Array(cellsLength).map(() => (
        <td />
      ))}
      <td className="w-[0%] p-0 pl-4 sm:pl-6" />
    </tr>
  );
};
