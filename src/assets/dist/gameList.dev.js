"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tictactoe = _interopRequireDefault(require("./images/tictactoe.png"));

var _rockpaperscissor = _interopRequireDefault(require("./images/rockpaperscissor.png"));

var _drumkit = _interopRequireDefault(require("./images/drumkit.png"));

var _empty = _interopRequireDefault(require("./images/empty.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var games = [{
  title: 'Tic Tac Toe',
  description: 'The classic 3 x 3 Tic Tac Toe',
  imageUrl: _tictactoe["default"],
  imgTitle: 'tictactoe'
}, {
  title: 'Rock Paper Scissors',
  description: 'The classic Rock Paper Scissors',
  imageUrl: _rockpaperscissor["default"],
  imgTitle: 'rockpaperscissor'
}, {
  title: 'Drum Kit',
  description: 'Playing drum with your keyboard',
  imageUrl: _drumkit["default"],
  imgTitle: 'drumkit'
}, {
  title: 'Chess',
  description: 'The classic Chess',
  imageUrl: _empty["default"],
  imgTitle: 'chess'
}, {
  title: 'Checker',
  description: 'The classic checker',
  imageUrl: _empty["default"],
  imgTitle: 'checker'
}, {
  title: '2D Ping Pong',
  description: 'The classic 2D Ping Pong',
  imageUrl: _empty["default"],
  imgTitle: 'pingpong'
}, {
  title: 'Snake',
  description: 'The classic Snake',
  imageUrl: _empty["default"],
  imgTitle: 'snake'
}, {
  title: 'Tank War',
  description: '2D Tank War game',
  imageUrl: _empty["default"],
  imgTitle: 'tankwar'
}];
var _default = games;
exports["default"] = _default;