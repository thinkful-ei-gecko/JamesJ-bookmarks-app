'use strict';

// eslint-disable-next-line 
const store = function(){
  // add bookmark
  const addBookmark = function(bookmark = Object){
    this.bookmarks.push(bookmark);
  };
  // update a bookmark found by id
  // delete a bookmark by id
  // set filter to new value
  // toggle adding form to display for adding new bookmark
  // toggle editing to render editing form for one bookmark
  return {
    bookmarks: [],
    adding: false,
    editing: false,
    filter: 1,
    addBookmark
  };
}();

store.addBookmark({title: 'flip', url: 'http://test.com', rating: 3, desc: 'some testing'});
console.log(store);