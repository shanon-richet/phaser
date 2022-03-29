const main = document.querySelector('main')
const grid = document.querySelector('.grid')
const sequence = document.querySelector('.sequence')

var game = new Phaser.Game(1000, 600, Phaser.CANVAS, 
    'phaser', {
        create: create, 
        preload: preload,
        render: render,
        update: update
    })

var background
const form_list = []
function preload() {
    game.stage.backgroundColor = "#427AA1"
    for (var i = 0; i < 7; i++) {
        game.load.image(`forme${i}`, `assets/forme${i}.png`)  
        const list = game.load.spritesheet('formes', `assets/forme${i}.png`, 32, 32)
        form_list.push(list)
    }  
}
function create() {
        var form_grid = game.add.group();
        form_grid.createMultiple(1, 
            [`forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`], [0], true);

        form_grid.align(4, 4, 100, 100)
        form_grid.x = 200;
        form_grid.y = 200;

        cases_1 = new Phaser.Rectangle(20, 50, 100, 100)
        cases_2 = new Phaser.Rectangle(150, 50, 100, 100)
        cases_3 = new Phaser.Rectangle(280, 50, 100, 100)

        game.add.image(0, 0, `forme${game.rnd.integerInRange(1, 6)}`)
        game.add.image(100, 0, `forme${game.rnd.integerInRange(1, 6)}`)
        game.add.image(200, 0, `forme${game.rnd.integerInRange(1, 6)}`)

        for (var i = 0; i < 6; i++) {
            formes.push(`forme${i}`)
        }     
    }
    function render() {
        game.debug.geom(cases_1, '#0CCA4A ')
        game.debug.geom(cases_2, '#F3FCF0')
        game.debug.geom(cases_3, '#F3FCF0')
    }    

    function update() {
    }