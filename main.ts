input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let Catch: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
basic.forever(function () {
    while (true) {
        for (let index = 0; index < 4; index++) {
            Catch = game.createSprite(randint(0, 4), 0)
            basic.pause(1000)
            for (let index = 0; index < 4; index++) {
                Catch.change(LedSpriteProperty.Y, 1)
                basic.pause(1000)
            }
            Catch.delete()
        }
        for (let index = 0; index < 4; index++) {
            Catch = game.createSprite(randint(0, 4), 0)
            basic.pause(500)
            for (let index = 0; index < 4; index++) {
                Catch.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
            Catch.delete()
        }
        for (let index = 0; index < 4; index++) {
            Catch = game.createSprite(randint(0, 4), 0)
            basic.pause(200)
            for (let index = 0; index < 4; index++) {
                Catch.change(LedSpriteProperty.Y, 1)
                basic.pause(200)
            }
            Catch.delete()
        }
    }
})
