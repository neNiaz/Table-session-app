interface Props {
  colsLength: number;
  CustomComponent: React.ReactNode;
}

export const NoResult: React.FC<Props> = ({ colsLength, CustomComponent }) => {
  return (
    <tr className="bg-white">
      <td className="w-[1.5%]" />
      <td colSpan={colsLength}>
        {CustomComponent || <span className="text-center">No results</span>}
      </td>
      <td className="w-[1.5%]" />
    </tr>
  );
};
