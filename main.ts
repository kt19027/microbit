input.onPinPressed(TouchPin.P0, function () {
    music.ringTone(131)
})
input.onButtonPressed(Button.A, function () {
    music.ringTone(784)
})
input.onPinPressed(TouchPin.P2, function () {
    music.ringTone(440)
})
input.onButtonPressed(Button.AB, function () {
    music.ringTone(587)
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(988)
})
input.onPinPressed(TouchPin.P1, function () {
    music.ringTone(247)
})
input.onSound(DetectedSound.Loud, function () {
	
})
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Resistive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Resistive)
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
basic.forever(function () {
	
})
