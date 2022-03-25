
var game = new Phaser.Game(800, 600, Phaser.AUTO, 
    null, {
        create: create, 
        preload: preload,
        update: update
    })
    
    var background;
    
    function preload() {
    game.load.image('forme1', 'assets/forme1.png')
    game.load.image('forme2', 'assets/forme2.png')
    game.load.image('forme3', 'assets/forme3.png')
    game.load.image('forme4', 'assets/forme4.png')
    game.load.image('forme5', 'assets/forme5.png')
    game.load.image('forme6', 'assets/forme6.png')
    
    game.stage.backgroundColor = "#fcba03"
    }
    function create() {
           forme1 = game.add.image(0, 200, `forme1`)
           forme1 = game.add.image(100, 200, `forme2`)
           forme1 = game.add.image(200, 200, `forme3`)
           forme1 = game.add.image(300, 200, `forme4`)
           forme1 = game.add.image(400, 200, `forme5`)
           forme1 = game.add.image(500, 200, `forme6`)
        }
    
    function update() {
    
    }