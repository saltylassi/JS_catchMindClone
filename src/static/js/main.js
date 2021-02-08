(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotification = void 0;

var handleMessageNotification = function handleMessageNotification(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
};

exports.handleMessageNotification = handleMessageNotification;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbiIsImRhdGEiLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDQyxJQUFELEVBQVU7QUFBQSxNQUN2Q0MsT0FEdUMsR0FDakJELElBRGlCLENBQ3ZDQyxPQUR1QztBQUFBLE1BQzlCQyxRQUQ4QixHQUNqQkYsSUFEaUIsQ0FDOUJFLFFBRDhCO0FBRS9DQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsV0FBZUYsUUFBZixnQkFBNkJELE9BQTdCO0FBQ0gsQ0FITSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoYW5kbGVNZXNzYWdlTm90aWZpY2F0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX0gOiAke21lc3NhZ2V9YCk7XHJcbn07XHJcbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

var sendMessage = function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You : ".concat(message));
};

var setNickname = function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
};

socket.on("messageNotification", _chat.handleMessageNotification);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTEzYjRjNi5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsImVtaXQiLCJjb25zb2xlIiwibG9nIiwic2V0Tmlja25hbWUiLCJuaWNrbmFtZSIsIm9uIiwiaGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUM3QkgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksWUFBWixFQUEwQjtBQUFFRCxJQUFBQSxPQUFPLEVBQVBBO0FBQUYsR0FBMUI7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGlCQUFxQkgsT0FBckI7QUFDSCxDQUhEOztBQUtBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBYztBQUM5QlIsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFSSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBM0I7QUFDSCxDQUZEOztBQUlBUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxxQkFBVixFQUFpQ0MsK0JBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbiB9IGZyb20gXCIuL2NoYXRcIjtcclxuXHJcbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuXHJcbmNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLCB7IG1lc3NhZ2UgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhgWW91IDogJHttZXNzYWdlfWApO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0Tmlja25hbWUgPSAobmlja25hbWUpID0+IHtcclxuICAgIHNvY2tldC5lbWl0KFwic2V0Tmlja25hbWVcIiwgeyBuaWNrbmFtZSB9KTtcclxufTtcclxuXHJcbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZmljYXRpb25cIiwgaGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbik7XHJcbiJdfQ==
},{"./chat":1}]},{},[2])