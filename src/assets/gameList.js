import tictactoe from './images/tictactoe.png';
import rockpaperscissor from './images/rockpaperscissor.png';
import drumkit from './images/drumkit.png';
import empty from './images/empty.png';

const games = [
    {
        title: 'Tic Tac Toe',
        description: 'The classic 3 x 3 Tic Tac Toe',
        imageUrl: tictactoe,
        imgTitle: 'tictactoe',
    },
    {
        title: 'Rock Paper Scissors',
        description: 'The classic Rock Paper Scissors',
        imageUrl: rockpaperscissor,
        imgTitle: 'rockpaperscissor',
    },
    {
        title: 'Drum Kit',
        description: 'Playing drum with your keyboard',
        imageUrl: drumkit,
        imgTitle: 'drumkit',
    },
    {
        title: 'Chess',
        description: 'The classic Chess',
        imageUrl: empty,
        imgTitle: 'chess',
    },
    {
        title: 'Checker',
        description: 'The classic checker',
        imageUrl: empty,
        imgTitle: 'checker',
    },
    {
        title: '2D Ping Pong',
        description: 'The classic 2D Ping Pong',
        imageUrl: empty,
        imgTitle: 'pingpong',
    },
    {
        title: 'Snake',
        description: 'The classic Snake',
        imageUrl: empty,
        imgTitle: 'snake',
    },
    {
        title: 'Tank War',
        description: '2D Tank War game',
        imageUrl: empty,
        imgTitle: 'tankwar',
    }
];

export default games;