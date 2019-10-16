import React from 'react';
import PropTypes from 'prop-types';

const QdtBookmark = ({
  qAppPromise, qDocPromise,
}) => {
  // const bookmarkList = qLayout.qBookmarkList;
  console.log(qAppPromise, qDocPromise);
  return (<div><h1>HELLO FROM BOOKMARKS</h1></div>);
};

QdtBookmark.propTypes = {
  qAppPromise: PropTypes.object.isRequired,
  qDocPromise: PropTypes.object.isRequired,
};
export default QdtBookmark;
