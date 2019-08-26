'use strict';

// eslint-disable-next-line
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jamesj-bookmarks-app';

  // create a fetch promise for a POST request
  const createBookmark = function(bookmark = Object){
    // bookmark.title and bookmark.url required, 
    // bookmark.desc and bookmark.rating optional
    return fetch(`${BASE_URL}/bookmarks`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookmark)
      });
  };

  // return a fetch promise for a GET request
  const getBookmarks = function(){
    return fetch(`${BASE_URL}/bookmarks`);
  };

  // return a fetch promise for a PATCH request
  const updateBookmark = function(id, options){
    return fetch(`${BASE_URL}/bookmarks/${id}`, 
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
      });
  };

  // delete bookmark
  const deleteBookmark = function(id){
    return fetch(`${BASE_URL}/bookmarks/${id}`, 
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  };
  
  return {
    createBookmark,
    getBookmarks,
    updateBookmark,
    deleteBookmark
  };
})();

// testing
api.getBookmarks()
  .then(res => res.json())
  .then(json => console.log(json));