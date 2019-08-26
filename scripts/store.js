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

  // toggle editing to render editing form for one bookmark at a time
  const toggleEditBookmark = function(id){
    this.bookmarks.forEach(bookmark => {
      bookmark.editing = false;
    });
    let bookmark = this.bookmarks.find(bookmark => id === bookmark.id);
    bookmark.editing = !bookmark.editing;
  };

  // set filter to new value
  const updateRatingFilter = function(num = Number){
    this.filter = num;
  };

  // toggle adding form to display for adding new bookmark
  const toggleAddBookmarkForm = function(){
    this.adding = !this.adding;
  };

  return {
    bookmarks: [
      {id: 'foobar1', title: 'Test title', url: 'http://someplace.com', rating: 4, desc: 'Excellent desc.', editing: false, expanded: true},
      {id: 'foobar2', title: 'Test title', url: 'http://someplace.com', rating: 4, desc: 'Excellent desc.', editing: false, expanded: false},
      {id: 'foobar3', title: 'Test title', url: 'http://someplace.com', rating: 4, desc: 'Excellent desc.', editing: false, expanded: false}
    ],
    adding: false,
    filter: 1,
    addBookmark,
    updateBookmark,
    deleteBookmarkByID,
    updateRatingFilter,
    toggleAddBookmarkForm,
    toggleEditBookmark
  };
}();