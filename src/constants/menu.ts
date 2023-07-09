export const menu = [
  {
    title: 'Dashboard',
    path: '/',
    dropDownMenu: [],
  },
  {
    title: 'Assets',
    path: '/assets',
    dropDownMenu: [],
  },
  {
    title: 'Collections',
    path: '/collections',
    dropDownMenu: [],
  },
  {
    title: 'Tools',
    path: '/tools',
    dropDownMenu: [
      {
        title: 'ISIN search',
        pointer: 'isin-search',
      },
      {
        title: 'ISIN info',
        pointer: 'isin-info',
      },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    dropDownMenu: [],
  },
];
