import React from 'react';
import PropTypes from 'prop-types';

const QdtBookmark = ({ qDocPromise }) => {
  // const bookmarkList = qLayout.qBookmarkList;
  qDocPromise((doc) => {
    console.log(doc.getBookmarks());
  })
  return (
    <div style={{ marginTop: '50px' }}>
      <h1>HELLO FROM BOOKMARKS</h1>
    </div>
  );
};

QdtBookmark.propTypes = {
  qDocPromise: PropTypes.object.isRequired,
};
export default QdtBookmark;
