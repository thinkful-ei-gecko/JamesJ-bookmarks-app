'use strict';

/* global store, api */


$('document').ready(function(){
  console.log('index.js is loading');
  api.getBookmarks()
    .then(res => res.json())
    .then(bookmarks => 
      bookmarks.forEach(bookmark => {
        store.addBookmark(bookmark);
        bookmarkList.render();
      }));
});

console.log('store', store.bookmarks);