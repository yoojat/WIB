import { DefaultTheme } from 'styled-components';
export const mediaSize = {
  pc: 1440,
  tablet: 768,
  mobile: 576,
};

export const theme: DefaultTheme = {
  color: {
    blue1: '#03045E',
    blue2: '#023E8A',
    blue3: '#0077B6',
    blue4: '#0096C7',
    blue5: '#00B4D8',
    blue6: '#48CAE4',
    blue7: '#90E0EF',
    blue8: '#ADE8F4',
    blue9: '#CAF0F8',
  },
  boxShadow: {
    normal: '0 3px 8px 0 rgb(0 0 0 / 10%)',
    purple: '0 3px 8px 0 #d6c9ff',
    blue: '0 3px 8px 0 #b3e2e6',
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(mediaSize.pc),
  tablet: customMediaQuery(mediaSize.tablet),
  mobile: customMediaQuery(mediaSize.mobile),
};
