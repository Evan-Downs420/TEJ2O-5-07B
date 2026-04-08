/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Sep 2020
 * This program control the servo
*/

// variables
let distance = 0

// setup
basic.showIcon(IconNames.Happy)

// button a
input.onButtonPressed(Button.A, function () {
    while (true) {

        // read distance sensor
        distance = sonar.ping(
            DigitalPin.P8,
            DigitalPin.P12,
            PingUnit.Centimeters
        )

        if (distance < 10) {
            robotbit.StpCarMove(0, 0)
            basic.pause(500)

            // reverse 10 cm
            robotbit.StpCarMove(-10, 48)
            basic.pause(1000)


            //turn 90 degrees
            robotbit.StpCarTurn(90, 48, 125)
            basic.pause(1000)

        } else {
            // Otherwise move forward
            robotbit.StpCarMove(10, 48)
        }
    }
})
