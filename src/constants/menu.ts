import { footerIcon } from './images';

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

export const footerMenu = [
  {
    icon: `${footerIcon.reddit}`,
    title: 'Reddit',
    path: '#',
  },
  {
    icon: `${footerIcon.twitter}`,
    title: 'Twitter',
    path: '#',
  },
  {
    icon: `${footerIcon.message}`,
    title: 'Help desk',
    path: '#',
  },
  {
    icon: ``,
    title: 'Terms and conditions',
    path: '#',
  },
  {
    icon: ``,
    title: 'Security',
    path: '#',
  },
  {
    icon: ``,
    title: 'Yodlee',
    path: '#',
  },
  {
    icon: ``,
    title: 'Privacy policy',
    path: '#',
  },
];

export enum MenuEnum {
  assets = 'Assets',
  collections = 'Collections',
  tools = 'Tools',
  'isin-search' = 'ISIN search',
  'isin-info' = 'ISIN info',
  settings = 'Settings',
}
