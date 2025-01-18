import { FC } from 'react';
import { MenuBar } from '../modules/layout/menu-bar';
import { menuItems } from '../shared/const/menu-bar-items';

interface Props {
  children: React.ReactNode;
}

export const App: FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <MenuBar menuItems={menuItems} />
      <main className="flex-1 p-2">{children}</main>
    </div>
  );
};
