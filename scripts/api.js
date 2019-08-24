'use strict';

// eslint-disable-next-line
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jamesj-bookmarks-app';

  // return a fetch promise for a GET request
  const getBookmarks = function(){
    return fetch(`${BASE_URL}/bookmarks`);
  };

  // delete bookmark
  const deleteBookmark = function(id, options){
    return fetch(`${BASE_URL}/bookmarks/${id}, ${options}`);
  };
  
  return {
    getBookmarks,
    deleteBookmark
  };
})();

// testing
api.getBookmarks()
  .then(res => res.json())
  .then(json => console.log(json));