const main = document.querySelector('main')
const grid = document.querySelector('.grid')
const sequence = document.querySelector('.sequence')

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 
    'phaser', {
        create: create, 
        preload: preload,
        render: render,
        update: update
    })

    var background
    
    function preload() {
        game.stage.backgroundColor = "#fcba03"
        for (var i = 0; i < 6; i++) {
            game.load.image(`forme${i}`, `assets/forme${i}.png`)       
        } 
    }
    function create() {
        cases_1 = new Phaser.Rectangle(20, 50, 100, 100)
        cases_2 = new Phaser.Rectangle(150, 50, 100, 100)
        cases_3 = new Phaser.Rectangle(280, 50, 100, 100)

        var formes = []
        var sprite1 = game.add.sprite(70, 250, 'forme1')
        var sprite2 = game.add.sprite(0, 0, 'forme2').alignTo(sprite1, Phaser.RIGHT_CENTER, 16)
        var sprite3 = game.add.sprite(0, 0, 'forme3').alignTo(sprite2, Phaser.RIGHT_CENTER, 16)
        var sprite4 = game.add.sprite(0, 0, 'forme4').alignTo(sprite3, Phaser.RIGHT_CENTER, 16)
        var sprite5 = game.add.sprite(0, 0, 'forme5').alignTo(sprite4, Phaser.RIGHT_CENTER, 16)
        var sprite6 = game.add.sprite(0, 0, 'forme6').alignTo(sprite5, Phaser.RIGHT_CENTER, 16)

        grid_case_1 = new Phaser.Rectangle()
        for (var i = 0; i < 6; i++) {
            formes.push(`forme${i}`)
        }   


    }
    function render() {
        game.debug.geom(cases_1, '#03f8fc')
        game.debug.geom(cases_2, '#03f8fc')
        game.debug.geom(cases_3, '#03f8fc')

    }    

    function update() {
    }

