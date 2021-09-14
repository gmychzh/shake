let stochastic = 0
input.onGesture(Gesture.Shake, function () {
    stochastic = randint(0, 5)
    if (stochastic == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        if (stochastic == 2) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . # #
                . . # . .
                . . # . .
                . . # . .
                . . . # .
                `)
        }
    }
})
