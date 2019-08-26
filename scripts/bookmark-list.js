'use strict';

/* global store, bookmarkItem */

// eslint-disable-next-line 
const bookmarkList = function(){
  
  // generate each bookmark from the api, after the store has been
  // updated with that data
  // once store matches api, render store in DOM

  const render = function(){
    let listString = '';
    store.bookmarks.forEach(bookmark => {
      listString += bookmarkItem.createBookmarkHTML(bookmark);
    });
    $('.js-bookmark-list').html(listString);
  };


  return {
    render
  };
}();