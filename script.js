var game = new Phaser.Game(800, 600, Phaser.AUTO, 
    null, {
        create: create, 
        preload: preload,
        update: update
    })
    var background
    
    function preload() {
    game.load.spritesheet('forme', 'assets/forme1.png')
    game.load.spritesheet('forme', 'assets/forme2.png')
    game.load.spritesheet('forme', 'assets/forme3.png')
    game.load.spritesheet('forme', 'assets/forme4.png')
    game.load.spritesheet('forme', 'assets/forme5.png')
    game.load.spritesheet('forme', 'assets/forme6.png')
    
    game.stage.backgroundColor = "#fcba03"
    }
    function create() {
        var group = game.add.group()
        group.createMultiple(24, 'forme', [0, 1, 2, 3, 4], true)
        group.align(12, -1, 20, 20)
           /*forme1 = game.add.image(0, 200, `forme1`)
           forme1 = game.add.image(100, 200, `forme2`)
           forme1 = game.add.image(200, 200, `forme3`)
           forme1 = game.add.image(300, 200, `forme4`)
           forme1 = game.add.image(400, 200, `forme5`)
           forme1 = game.add.image(500, 200, `forme6`)*/
        }
    
    function update() {
    
    }

    for (let i = 0; i < 6; i++)