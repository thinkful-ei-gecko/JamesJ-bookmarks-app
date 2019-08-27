'use strict';

// eslint-disable-next-line 
const bookmarkItem = function(){
  
  // produce the HTML needed to render a bookmark within the DOM

  const createBookmarkHTML = function(obj){

    if(obj.expanded) {
      return `
      <li data-bookmark-id="${obj.id}" class="bookmark">
        <div data-bookmark-id="${obj.id}" class="bookmark-expand">
          <h3>${obj.title}</h3>
          <p>Rating: ${obj.rating = obj.rating ? obj.rating : 'None provided'}</p>
          <p placeholder="No description provided" disabled>${obj.desc}</p>
          <a href="${obj.url}">Visit Site</a>
        </div>
        <button id="delete">Delete</button>
      </li>
    `;
    }

    return `
    <li data-bookmark-id="${obj.id}" class="bookmark">
      <div data-bookmark-id="${obj.id}" class="bookmark-collapse">
        <h3>${obj.title}</h3>
        <p>Rating: ${obj.rating = obj.rating ? obj.rating : 'N/A'}</p>
      </div>
      <button id="delete">Delete</button>
    </li>
  `;
  };
  
  return {
    createBookmarkHTML
  };
}();