import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Preloader = (props) => {
  const {
    width, height,
  } = props;
  const margin = 'auto';
  return (<div style={{ height, width, margin }}><Loader style={{ margin }} type="Grid" color="#cccccc" height={80} width={80} /></div>);
};
Preloader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  // paddingTop: PropTypes.string,
  // type: PropTypes.string,
};
Preloader.defaultProps = {
  width: '50%',
  height: '50%',
  // paddingTop: 0,
  // type: 'balls',
};
export default Preloader;
