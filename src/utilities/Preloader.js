import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Preloader = (props) => {
  const {
    width, height, paddingTop, type,
  } = props;

  return (<Loader type="Grid" color="#somecolor" height={80} width={80} />);
};

Preloader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  paddingTop: PropTypes.string,
  type: PropTypes.string,
};
Preloader.defaultProps = {
  width: '100%',
  height: '100%',
  paddingTop: 0,
  type: 'balls',
};
export default Preloader;
