import $ from 'jquery';

$(document).ready(function () {
  const iconContainer = document.getElementById('icons');
  $.getJSON('data/material-icon-character-list.json', function(data) {
    let child, name, code;
    $.each(data, function(key, val) {
      child = document.createElement('li');

      name = child.appendChild(document.createElement('span'));
      code = child.appendChild(document.createElement('span'));

      name.textContent = key;
      name.title = key;

      code.textContent = val;

      iconContainer.appendChild(child);
    });
  });
});
