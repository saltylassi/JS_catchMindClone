(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./notifications");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODkxNjJhY2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG4iXX0=
},{"./login":2,"./notifications":3,"./sockets":4}],2:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var nickname = localStorage.getItem("nickname");
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";

var login = function login(nickname) {
  var socket = io("/"); //연결

  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  login(nickname);
}

var handleLogin = function handleLogin(event) {
  event.preventDefault();
  var input = loginForm.querySelector("input");
  localStorage.setItem("nickname", input.value);
  body.className = LOGGED_IN;
  login(input.value);
  input.value = "";
};

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJsb2dpbiIsInNvY2tldCIsImlvIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsInNldE5pY2tuYW1lIiwiY2xhc3NOYW1lIiwiaGFuZGxlTG9naW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJzZXRJdGVtIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWpCO0FBRUEsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNMLFFBQUQsRUFBYztBQUN4QixNQUFNTSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCLENBRHdCLENBQ0E7O0FBQ3hCRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVYLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF2QztBQUNBLDRCQUFZTSxNQUFaO0FBQ0gsQ0FKRDs7QUFNQSxJQUFJTixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJMLEVBQUFBLElBQUksQ0FBQ2lCLFNBQUwsR0FBaUJULFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hSLEVBQUFBLElBQUksQ0FBQ2lCLFNBQUwsR0FBaUJSLFNBQWpCO0FBQ0FDLEVBQUFBLEtBQUssQ0FBQ0wsUUFBRCxDQUFMO0FBQ0g7O0FBRUQsSUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdsQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUVBSSxFQUFBQSxZQUFZLENBQUNnQixPQUFiLENBQXFCLFVBQXJCLEVBQWlDRCxLQUFLLENBQUNFLEtBQXZDO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNpQixTQUFMLEdBQWlCUixTQUFqQjtBQUNBQyxFQUFBQSxLQUFLLENBQUNXLEtBQUssQ0FBQ0UsS0FBUCxDQUFMO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDSCxDQVJEOztBQVVBLElBQUlwQixTQUFKLEVBQWU7QUFDWEEsRUFBQUEsU0FBUyxDQUFDcUIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLFdBQXJDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xyXG5cclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5pY2tuYW1lXCIpO1xyXG5cclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuXHJcbmNvbnN0IGxvZ2luID0gKG5pY2tuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7IC8v7Jew6rKwXHJcbiAgICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xyXG4gICAgaW5pdFNvY2tldHMoc29ja2V0KTtcclxufTtcclxuXHJcbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xyXG59IGVsc2Uge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgICBsb2dpbihuaWNrbmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUxvZ2luID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmlja25hbWVcIiwgaW5wdXQudmFsdWUpO1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgICBsb2dpbihpbnB1dC52YWx1ZSk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbn07XHJcblxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVMb2dpbik7XHJcbn1cclxuIl19
},{"./sockets":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = void 0;

var _events = _interopRequireDefault(require("../../src/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var notifications = document.getElementById("jsNotifications");

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  console.log(nickname);
};

exports.handleNewUser = handleNewUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoYW5kbGVOZXdVc2VyIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsQ0FBdEI7O0FBRU8sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUMzQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDSCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi4vLi4vc3JjL2V2ZW50c1wiO1xyXG5cclxuY29uc3Qgbm90aWZpY2F0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNOb3RpZmljYXRpb25zXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhuaWNrbmFtZSk7XHJcbn07XHJcbiJdfQ==
},{"../../src/events":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(socket1) {
  return socket = socket1;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(socket1) {
  var _window = window,
      events = _window.events;
  updateSocket(socket1);
  socket1.on(events.newUser, _notifications.handleNewUser);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0Iiwic29ja2V0MSIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDM0IsU0FBT0QsTUFBUDtBQUNILENBRk07Ozs7QUFJQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFELEVBQWE7QUFDckMsU0FBUUgsTUFBTSxHQUFHRyxPQUFqQjtBQUNILENBRk07Ozs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRCxPQUFELEVBQWE7QUFBQSxnQkFDakJFLE1BRGlCO0FBQUEsTUFDNUJDLE1BRDRCLFdBQzVCQSxNQUQ0QjtBQUVwQ0osRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVo7QUFDQUEsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ0UsT0FBbEIsRUFBMkJDLDRCQUEzQjtBQUNILENBSk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG5cclxubGV0IHNvY2tldCA9IG51bGw7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNvY2tldDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXQgPSAoc29ja2V0MSkgPT4ge1xyXG4gICAgcmV0dXJuIChzb2NrZXQgPSBzb2NrZXQxKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChzb2NrZXQxKSA9PiB7XHJcbiAgICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xyXG4gICAgdXBkYXRlU29ja2V0KHNvY2tldDEpO1xyXG4gICAgc29ja2V0MS5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XHJcbn07XHJcbiJdfQ==
},{"./notifications":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var events = {
  setNickname: "setNickName",
  newUser: "newUser"
};
var _default = events;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6WyJldmVudHMiLCJzZXROaWNrbmFtZSIsIm5ld1VzZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxXQUFXLEVBQUUsYUFERjtBQUVYQyxFQUFBQSxPQUFPLEVBQUU7QUFGRSxDQUFmO2VBS2VGLE0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmVudHMgPSB7XHJcbiAgICBzZXROaWNrbmFtZTogXCJzZXROaWNrTmFtZVwiLFxyXG4gICAgbmV3VXNlcjogXCJuZXdVc2VyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XHJcbiJdfQ==
},{}]},{},[1])