/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Sep 2020
 * This program control the servo
*/

// variable
let distance = 0
const strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)


// clear setup
strip.clear()
strip.show()


basic.showIcon(IconNames.Happy)


// press a
input.onButtonPressed(Button.A, function () {

    distance = sonar.ping(DigitalPin.P8, DigitalPin.P12, PingUnit.Centimeters)


    if (distance < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    strip.show()
    basic.showNumber(distance)
})

// setup
basic.showIcon(IconNames.Happy)

// loop forever
while (true) {
    if (input.buttonIsPressed(Button.A) == true) {
        // turn the motor 180 degrees
        basic.showIcon(IconNames.Yes)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
        basic.showIcon(IconNames.Happy)
    }

    if (input.buttonIsPressed(Button.B) == true) {
        // move car forwards and backwards
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
        basic.pause(500)
        robotbit.StpCarMove(-10, 48)
        basic.showIcon(IconNames.Happy)
    }
}

