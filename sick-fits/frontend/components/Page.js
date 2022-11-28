import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
  font-style: normal;
}
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey)
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhit: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h2>I am the cat!!!</h2>

      {children}
    </div>
  );
}

Page.propTypes = {
  // children: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.any,
};
