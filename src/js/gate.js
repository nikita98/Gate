// ----- Typical module

var $ = require('jquery');

module.exports = function () {
    let gate = [
        [
            'iron1', [
            ['iron1'],
            ['iron2'],
            ['iron3']
        ],
            'tree1', [
            ['tree1'],
            ['tree2']
        ],
            'classic', [
            ['classic', ['classic', 'classic-black', 'classic-white', 'classic-dark']],
            ['classic-wood', ['classic-wood', 'classic-wood-light']]
        ],

        ]
    ];
    let $gate = $('.b-gate-js');
    console.log($gate);
};
