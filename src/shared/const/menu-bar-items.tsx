import schedule from '../../../public/icons/schedule.svg';
import sessions from '../../../public/icons/sessions.svg';
import rooms from '../../../public/icons/rooms.svg';
import users from '../../../public/icons/users.svg';
import groups from '../../../public/icons/groups.svg';
import devices from '../../../public/icons/devices.svg';
import settings from '../../../public/icons/settings.svg';
import archive from '../../../public/icons/archive.svg';

export const menuItems = [
  {
    href: '',
    title: 'Расписание',
    icon: <img src={schedule} alt="calendar" />,
  },
  {
    href: '/',
    title: 'Учебные сессии',
    icon: <img src={sessions} alt="sessions" />,
  },
  {
    href: '',
    title: 'Список комнат',
    icon: <img src={rooms} alt="rooms" />,
  },
  {
    href: '',
    title: 'Пользователи',
    icon: <img src={users} alt="users" />,
  },
  {
    href: '',
    title: 'Учебные группы',
    icon: <img src={groups} alt="groups" />,
  },
  {
    href: '',
    title: 'Список устройств',
    icon: <img src={devices} alt="devices" />,
  },
  {
    href: '',
    title: 'Настройки системы',
    icon: <img src={settings} alt="settings" />,
  },
  {
    href: '',
    title: 'Архив',
    icon: <img src={archive} alt="archive" />,
  },
];
