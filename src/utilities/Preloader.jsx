import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Preloader = (props) => {
  const {
    width, height,
  } = props;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Loader style={{ margin: 'auto' }} type="Grid" color="#cccccc" height={height} width={width} />
    </div>
  );
};
Preloader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  // paddingTop: PropTypes.string,
  // type: PropTypes.string,
};
Preloader.defaultProps = {
  width: 20,
  height: 20,
  // paddingTop: 0,
  // type: 'balls',
};
export default Preloader;
