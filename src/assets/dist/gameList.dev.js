"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tictactoe = _interopRequireDefault(require("./images/tictactoe.png"));

var _rockpaperscissor = _interopRequireDefault(require("./images/rockpaperscissor.png"));

var _drumKitTitle = _interopRequireDefault(require("./images/drumKit/drumKitTitle.png"));

var _comingSoon = _interopRequireDefault(require("./images/comingSoon.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var games = [{
  title: 'Tic Tac Toe',
  description: 'The classic 3 x 3 Tic Tac Toe',
  imageUrl: _tictactoe["default"],
  imgTitle: 'tictactoe',
  url: "/tictactoe",
  isAvailable: true
}, {
  title: 'Rock Paper Scissors',
  description: 'The classic Rock Paper Scissors',
  imageUrl: _rockpaperscissor["default"],
  imgTitle: 'rockpaperscissor',
  url: '/rockpaperscissor',
  isAvailable: true
}, {
  title: 'Drum Kit',
  description: 'Playing drum with your keyboard',
  imageUrl: _drumKitTitle["default"],
  imgTitle: 'drumkit',
  url: '/drumkit',
  isAvailable: true
}, {
  title: 'Chess',
  description: 'The classic Chess',
  imageUrl: _comingSoon["default"],
  imgTitle: 'chess',
  url: '/chess',
  isAvailable: false
}, {
  title: 'Checker',
  description: 'The classic checker',
  imageUrl: _comingSoon["default"],
  imgTitle: 'checker',
  url: '/checker',
  isAvailable: false
}, {
  title: '2D Ping Pong',
  description: 'The classic 2D Ping Pong',
  imageUrl: _comingSoon["default"],
  imgTitle: 'pingpong',
  url: '/pingpong',
  isAvailable: false
}, {
  title: 'Snake',
  description: 'The classic Snake',
  imageUrl: _comingSoon["default"],
  imgTitle: 'snake',
  url: '/snake',
  isAvailable: false
}, {
  title: 'Tank War',
  description: '2D Tank War game',
  imageUrl: _comingSoon["default"],
  imgTitle: 'tankwar',
  url: '/tankwar',
  isAvailable: false
}];
var _default = games;
exports["default"] = _default;