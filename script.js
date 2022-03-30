const main = document.querySelector('main')
const grid = document.querySelector('.grid')
const sequence = document.querySelector('.sequence')

var game = new Phaser.Game(1000, 700, Phaser.CANVAS, 
    'phaser', {
        create: create, 
        preload: preload,
        render: render,
        update: update
    })

function preload() {
    game.stage.backgroundColor = "#427AA1"
    for (var i = 1; i < 7; i++) {
        game.load.image(`forme${i}`, `assets/forme${i}.png`)  

    }  
}
function create() {
        bg_selector = game.add.bitmapData(0, 0)
        bg_selector.rect(35, 65, 120, 120, '#51CB20')
        bg_selector_2 = game.add.bitmapData(500, 500)
        bg_selector_2.rect(215, 65, 120, 120, '#F3FCF0')
        bg_selector_3 = game.add.bitmapData(800, 800)
        bg_selector_3.rect(395, 65, 120, 120, '#F3FCF0')
        
        bg_selector.addToWorld()
        bg_selector_2.addToWorld()
        bg_selector_3.addToWorld()

        bg_rect = game.add.bitmapData(200, 200)
        bg_rect.rect(20, 20, 100, 100, '#F3FCF0')

        var background_grid = game.add.group()
        background_grid.createMultiple(4, [bg_rect], [0, 1, 2], true)
        background_grid.align(4, 4, 150, 150)
        background_grid.x = 170
        background_grid.y = 220
        game.physics.startSystem(Phaser.Physics.ARCADE)
        var form_grid = game.add.group()
        
        form_grid.createMultiple(1, 
            [`forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`,
            `forme${game.rnd.integerInRange(1, 6)}`, `forme${game.rnd.integerInRange(1, 6)}`], [0], true);
        form_grid.align(4, 4, 150, 150)
        form_grid.x = 200
        form_grid.y = 250

        selector_1 = new Phaser.Rectangle(20, 50, 150, 150)
        selector_2 = new Phaser.Rectangle(200, 50, 150, 150)
        selector_3 = new Phaser.Rectangle(380, 50, 150, 150)

        form_1 = game.add.sprite(0, 0, `forme${game.rnd.integerInRange(1, 6)}`)
        form_2 = game.add.sprite(100, 0, `forme${game.rnd.integerInRange(1, 6)}`)
        form_3 = game.add.sprite(200, 0, `forme${game.rnd.integerInRange(1, 6)}`)
  
        form_1.alignIn(selector_1, Phaser.CENTER)
        
        form_2.alignIn(selector_2, Phaser.CENTER)
        form_3.alignIn(selector_3, Phaser.CENTER)
        game.physics.arcade.enable(form_1)
}
function render() {
    game.debug.rectangle(selector_1, '#F3FCF0', false)
    game.debug.rectangle(selector_2, '#F3FCF0', false)
    game.debug.rectangle(selector_3, '#F3FCF0', false)
    //game.debug.geom(background_rect, '#fffff')
}    

    function update() {
    }