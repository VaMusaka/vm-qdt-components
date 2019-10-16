import React from 'react';
import PropTypes from 'prop-types';
import withSelectionObject from './withSelectionObject';

const QdtBookmark = ({
  qLayout,
}) => {
  const bookmarkList = qLayout.qBookmarkList.qItems;
  console.log(bookmarkList);
  return (<div><h1>HELLO FROM BOOKMARKS</h1></div>);
};

QdtBookmark.propTypes = {
  qLayout: PropTypes.object.isRequired,
};

const QdtBookmarkObject = withSelectionObject(QdtBookmark);
QdtBookmarkObject.propTypes = {
  qDocPromise: PropTypes.object.isRequired,
  cols: PropTypes.array,
  options: PropTypes.object,
  qPage: PropTypes.object,
};
QdtBookmarkObject.defaultProps = {
  cols: [],
  options: { qType: 'SelectionObject' },
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 1,
    qHeight: 1,
  },
};
export default QdtBookmarkObject;
