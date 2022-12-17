input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    wuKong.stopMotor(wuKong.MotorList.M1)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Violet))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.show()
music.setVolume(255)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
