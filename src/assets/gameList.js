import tictactoe from './images/tictactoe.png';
import rockpaperscissor from './images/rockpaperscissor.png';
import drumkit from './images/drumKit/drumKitTitle.png';
import comingSoon from './images/comingSoon.png';

const games = [
    {
        title: 'Tic Tac Toe',
        description: 'The classic 3 x 3 Tic Tac Toe',
        imageUrl: tictactoe,
        imgTitle: 'tictactoe',
        url: "/tictactoe",
        isAvailable: true
    },
    {
        title: 'Rock Paper Scissors',
        description: 'The classic Rock Paper Scissors',
        imageUrl: rockpaperscissor,
        imgTitle: 'rockpaperscissor',
        url: '/rockpaperscissor',
        isAvailable: true
    },
    {
        title: 'Drum Kit',
        description: 'Playing drum with your keyboard',
        imageUrl: drumkit,
        imgTitle: 'drumkit',
        url: '/drumkit',
        isAvailable: true
    },
    {
        title: 'Chess',
        description: 'The classic Chess',
        imageUrl: comingSoon,
        imgTitle: 'chess',
        url: '/chess',
        isAvailable: false
    },
    {
        title: 'Checker',
        description: 'The classic checker',
        imageUrl: comingSoon,
        imgTitle: 'checker',
        url: '/checker',
        isAvailable: false
    },
    {
        title: '2D Ping Pong',
        description: 'The classic 2D Ping Pong',
        imageUrl: comingSoon,
        imgTitle: 'pingpong',
        url: '/pingpong',
        isAvailable: false
    },
    {
        title: 'Snake',
        description: 'The classic Snake',
        imageUrl: comingSoon,
        imgTitle: 'snake',
        url: '/snake',
        isAvailable: false
    },
    {
        title: 'Tank War',
        description: '2D Tank War game',
        imageUrl: comingSoon,
        imgTitle: 'tankwar',
        url: '/tankwar',
        isAvailable: false
    }
];

export default games;