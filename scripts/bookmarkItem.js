'use strict';

// eslint-disable-next-line 
const bookmarkItem = function(){
  
  // produce the HTML needed to render a bookmark within the DOM

  const createBookmarkHTML = function(obj){

    if(obj.expanded) {
      return `
      <li>
        <h3>${obj.title}</h3>
        <p>Rating: ${obj.rating = obj.rating ? obj.rating : 'None provided'}</p>
        <textarea placeholder="No description provided" disabled>${obj.desc}</textarea>
        <a href="${obj.url}">Visit Site</a>
      </li>
    `;
    }

    return `
    <li>
      <h3>${obj.title}</h3>
      <p>Rating: ${obj.rating = obj.rating ? obj.rating : 'N/A'}</p>
    </li>
  `;
  };
  
  return {
    createBookmarkHTML
  };
}();