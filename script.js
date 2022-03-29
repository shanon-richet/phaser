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
var form_1, form_2, form_3
var selector_1, selector_2, selector_3

function preload() {
    game.stage.backgroundColor = "#427AA1"
    for (var i = 0; i < 7; i++) {
        game.load.image(`forme${i}`, `assets/forme${i}.png`)  
        const list = game.load.spritesheet('formes', `assets/forme${i}.png`, 32, 32)
        list
    }  
}
function create() {
        var form_grid = game.add.group()
        var selector_group = game.add.group()
        var form_group = game.add.group()
        
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

        selector_1 = new Phaser.Rectangle(20, 50, 150, 150)
        selector_2 = new Phaser.Rectangle(200, 50, 150, 150)
        selector_3 = new Phaser.Rectangle(380, 50, 150, 150)

        form_1 = game.add.sprite(0, 0, `forme${game.rnd.integerInRange(1, 6)}`)
        form_2 = game.add.sprite(100, 0, `forme${game.rnd.integerInRange(1, 6)}`)
        form_3 = game.add.sprite(200, 0, `forme${game.rnd.integerInRange(1, 6)}`)
  
        form_1.alignIn(selector_1, Phaser.CENTER)
        form_2.alignIn(selector_2, Phaser.CENTER)
        form_3.alignIn(selector_3, Phaser.CENTER)
    }
    function render() {
        game.debug.rectangle(selector_1, '#ffffff', false)
        game.debug.rectangle(selector_2, '#ffffff', false)
        game.debug.rectangle(selector_3, '#ffffff', false)
        // game.debug.geom(selector_1, '#fffff')
    }    

    function update() {
    }