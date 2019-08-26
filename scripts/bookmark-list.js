'use strict';

/* global store, bookmarkItem */

// eslint-disable-next-line 
const bookmarkList = function(){
  
  // generate each bookmark from the api, after the store has been
  // updated with that data
  // once store matches api, render store in DOM

  const render = function(){
    let entries = [...store.bookmarks];
    let listString = '';

    if(store.filter) {
      entries = entries.filter(entry => entry.rating >= store.filter);
    }

    entries.forEach(bookmark => {
      listString += bookmarkItem.createBookmarkHTML(bookmark);
    });
    $('.js-bookmark-list').html(listString);
  };


  return {
    render
  };
}();