import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h2>I am the cat!!!</h2>

      {children}
    </div>
  );
}

Page.propTypes = {
  // children: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.any,
};
