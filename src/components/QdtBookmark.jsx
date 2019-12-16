import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class QdtBookmark extends Component {
  static propTypes = { qAppPromise: PropTypes.object.isRequired };

  constructor(props) {
    super(props);
    this.state = {
      bookmarks: null,
      error: null,
    };
  }

  componentWillMount() {
    this.BookmarkList = this.getList();
  }

  async getList() {
    try {
      const { qAppPromise } = this.props;
      const qApp = await qAppPromise;
      const list = await qApp.getList('BookmarkList');
      return list;
    } catch (error) {
      this.setState({ error });
      return undefined;
    }
  }


  render() {
    const { error, bookmarks } = this.state;
    console.log(this.BookmarkList);
    console.log(error, bookmarks);
    return (
      <div />
    );
  }
}
