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
    game.stage.backgroundColor = "#fcba03"
    for (var i = 0; i < 7; i++) {
        game.load.image(`forme${i}`, `assets/forme${i}.png`)  
        const list = game.load.spritesheet('formes', `assets/forme${i}.png`, 32, 32)
        form_list.push(list)
    }  
}
function create() {
        var form_grid = game.add.group();
        form_grid.createMultiple(2, 
            [`forme${[Math.floor(Math.random() * 6)]}`, 
            `forme${[Math.floor(Math.random() * 6)]}`, 
            `forme${[Math.floor(Math.random() * 6)]}`, 
            `forme${[Math.floor(Math.random() * 6)]}`, 
            `forme${[Math.floor(Math.random() * 6)]}`, 
            `forme${[Math.floor(Math.random() * 6)]}`], [0, 1], true);
        form_grid.align(5, 5, 100, 100)

        form_grid.x = 200;
        form_grid.y = 200;

        cases_1 = new Phaser.Rectangle(20, 50, 100, 100)
        cases_2 = new Phaser.Rectangle(150, 50, 100, 100)
        cases_3 = new Phaser.Rectangle(280, 50, 100, 100)

        var formes = []
        game.add.image(0, 0, 'forme1')
        game.add.image(100, 0, 'forme2')
        game.add.image(200, 0, 'forme3')
        game.add.image(300, 0, 'forme4')
        game.add.image(400, 0, 'forme5')
        game.add.image(500, 0, 'forme6')

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
