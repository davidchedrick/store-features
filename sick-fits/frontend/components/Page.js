import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
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
