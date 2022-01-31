import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      blue1: '#03045E';
      blue2: '#023E8A';
      blue3: '#0077B6';
      blue4: '#0096C7';
      blue5: '#00B4D8';
      blue6: '#48CAE4';
      blue7: '#90E0EF';
      blue8: '#ADE8F4';
      blue9: '#CAF0F8';
    };
    boxShadow: {
      normal: '0 3px 8px 0 rgb(0 0 0 / 10%)';
      purple: '0 3px 8px 0 #d6c9ff';
      blue: '0 3px 8px 0 #b3e2e6';
    };
  }
}
