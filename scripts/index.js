'use strict';

/* global store, api, bookmarkList, bookmarkForm */

$('document').ready(function(){
  api.getBookmarks()
    .then(res => res.json())
    .then(bookmarks => 
      bookmarks.forEach(bookmark => {
        store.addBookmark(bookmark);
        bookmarkList.render();
      }));
  if(store.adding) {
    bookmarkForm.render();
  }
  bookmarkList.bindBookmarkListEventHandlers();
  bookmarkForm.bindFormEventListeners();
  console.log('index.js is loaded');
});

console.log('store', store.bookmarks);