(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(factory(global.$));
}(this, (function ($) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

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

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy9pY29uLWxpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb25zJyk7XG4gICQuZ2V0SlNPTignZGF0YS9tYXRlcmlhbC1pY29uLWNoYXJhY3Rlci1saXN0Lmpzb24nLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgbGV0IGNoaWxkLCBuYW1lLCBjb2RlO1xuICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbihrZXksIHZhbCkge1xuICAgICAgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICBuYW1lID0gY2hpbGQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcbiAgICAgIGNvZGUgPSBjaGlsZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgbmFtZS50aXRsZSA9IGtleTtcblxuICAgICAgY29kZS50ZXh0Q29udGVudCA9IHZhbDtcblxuICAgICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7RUFDNUIsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUN2RCxDQUFDLENBQUMsT0FBTyxDQUFDLHdDQUF3QyxFQUFFLFNBQVMsSUFBSSxFQUFFO0lBQ2pFLElBQUksS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFFO01BQzlCLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDOztNQUVyQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDekQsSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztNQUV6RCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztNQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs7TUFFakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7O01BRXZCLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEMsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDOzs7OyJ9
