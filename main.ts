input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Umbrella)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    basic.pause(1000)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    basic.pause(5000)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.showIcon(IconNames.Diamond)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Umbrella)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 90)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    basic.pause(1000)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.showIcon(IconNames.Diamond)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Happy)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    basic.pause(5000)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.showIcon(IconNames.Diamond)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    basic.showIcon(IconNames.Umbrella)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 180)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    basic.pause(1000)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.showIcon(IconNames.SmallDiamond)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    basic.pause(5000)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.showIcon(IconNames.Diamond)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    basic.showIcon(IconNames.Umbrella)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    basic.pause(1000)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.showIcon(IconNames.Diamond)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    basic.pause(500)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    basic.clearScreen()
})
basic.forever(function () {
	
})
