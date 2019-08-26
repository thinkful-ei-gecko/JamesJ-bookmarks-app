'use strict';

// eslint-disable-next-line 
const store = function(){
  // add bookmark
  const addBookmark = function(bookmark = Object){
    this.bookmarks.push(bookmark);
  };
  
  // update a bookmark found by id
  const updateBookmark = function(id, options){
    let bookmark = this.bookmarks.find(bookmark => id === bookmark.id);
    Object.assign(bookmark, options);
  };
  
  // delete a bookmark by id
  const deleteBookmarkByID = function(id){
    this.bookmarks = this.bookmarks.filter(bookmark => id !== bookmark.id);
  };

  // set filter to new value
  // toggle adding form to display for adding new bookmark
  // toggle editing to render editing form for one bookmark
  return {
    bookmarks: [
      {id: 'foobar1', title: 'Test title', url: 'http://someplace.com', rating: 4, desc: 'Excellent desc.'},
      {id: 'foobar2', title: 'Test title', url: 'http://someplace.com', rating: 4, desc: 'Excellent desc.'},
      {id: 'foobar3', title: 'Test title', url: 'http://someplace.com', rating: 4, desc: 'Excellent desc.'}
    ],
    adding: false,
    editing: false,
    filter: 1,
    addBookmark,
    updateBookmark,
    deleteBookmarkByID
  };
}();