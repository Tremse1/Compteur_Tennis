input.onButtonPressed(Button.A, function () {
    if (Compteur_Seb == 0) {
        Compteur_Seb += 15
        if (Service == 1) {
            basic.showNumber(Compteur_Seb,60)
basic.showNumber(Compteur_adversaire,60)
basic.clearScreen()
        } else {
            basic.showNumber(Compteur_adversaire,60)
basic.showNumber(Compteur_Seb,60)
basic.clearScreen()
        }
    } else if (Compteur_Seb == 15) {
        Compteur_Seb += 15
        if (Service == 1) {
            basic.showNumber(Compteur_Seb,60)
basic.showNumber(Compteur_adversaire,60)
basic.clearScreen()
        } else {
            basic.showNumber(Compteur_adversaire,60)
basic.showNumber(Compteur_Seb,60)
basic.clearScreen()
        }
    } else if (Compteur_Seb == 30) {
        Compteur_Seb += 10
        if (Service == 1) {
            basic.showNumber(Compteur_Seb,60)
basic.showNumber(Compteur_adversaire,60)
basic.clearScreen()
        } else {
            basic.showNumber(Compteur_adversaire,60)
basic.showNumber(Compteur_Seb,60)
basic.clearScreen()
        }
    } else if (Compteur_Seb == 40 && Compteur_adversaire < 40) {
        basic.showString("Jeu Seb",60)
Points_Seb += 1
        Compteur_Seb = 0
        Compteur_adversaire = 0
    } else if (Compteur_Seb >= 40 && Compteur_adversaire >= 40 && Compteur_Seb < Compteur_adversaire) {
        Compteur_Seb += 1
        basic.showString("Egalite",60)
    } else if (Compteur_Seb >= 40 && Compteur_adversaire >= 40 && Compteur_Seb == Compteur_adversaire) {
        Compteur_Seb += 1
        basic.showString("Avantage Seb",60)
    } else if (Compteur_Seb >= 40 && Compteur_adversaire >= 40 && Compteur_Seb > Compteur_adversaire) {
        basic.showString("Jeu Seb",60)
Points_Seb += 1
        Compteur_Seb = 0
        Compteur_adversaire = 0
    }
    if (Points_Seb == 6) {
        basic.showString("Match Seb",60)
music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("SEB:",60)
basic.showNumber(Points_Seb,60)
basic.showString("Adversaire:",60)
basic.showNumber(Points_adversaire,60)
})
input.onButtonPressed(Button.B, function () {
    if (Compteur_adversaire == 0) {
        Compteur_adversaire += 15
        if (Service == 0) {
            basic.showNumber(Compteur_adversaire,60)
basic.showNumber(Compteur_Seb,60)
basic.clearScreen()
        } else {
            basic.showNumber(Compteur_Seb,60)
basic.showNumber(Compteur_adversaire,60)
basic.clearScreen()
        }
    } else if (Compteur_adversaire == 15) {
        Compteur_adversaire += 15
        if (Service == 0) {
            basic.showNumber(Compteur_adversaire,60)
basic.showNumber(Compteur_Seb,60)
basic.clearScreen()
        } else {
            basic.showNumber(Compteur_Seb,60)
basic.showNumber(Compteur_adversaire,60)
basic.clearScreen()
        }
    } else if (Compteur_adversaire == 30) {
        Compteur_adversaire += 10
        if (Service == 0) {
            basic.showNumber(Compteur_adversaire,60)
basic.showNumber(Compteur_Seb,60)
basic.clearScreen()
        } else {
            basic.showNumber(Compteur_Seb,60)
basic.showNumber(Compteur_adversaire,60)
basic.clearScreen()
        }
    } else if (Compteur_adversaire == 40 && Compteur_Seb < 40) {
        basic.showString("Jeu adversaire",60)
Points_adversaire += 1
        Compteur_adversaire = 0
        Compteur_Seb = 0
    } else if (Compteur_adversaire >= 40 && Compteur_Seb >= 40 && Compteur_adversaire < Compteur_Seb) {
        Compteur_adversaire += 1
        basic.showString("Egalite",60)
    } else if (Compteur_adversaire >= 40 && Compteur_Seb >= 40 && Compteur_adversaire == Compteur_Seb) {
        Compteur_adversaire += 1
        basic.showString("Avantage adversaire",60)
    } else if (Compteur_adversaire >= 40 && Compteur_Seb >= 40 && Compteur_adversaire > Compteur_Seb) {
        basic.showString("Jeu adversaire",60)
Points_adversaire += 1
        Compteur_adversaire = 0
        Compteur_Seb = 0
    }
    if (Points_adversaire == 6) {
        basic.showString("Match adversaire",60)
    }
})
input.onGesture(Gesture.Shake, function () {
    music.setVolume(220)
    music.playTone(523, music.beat(BeatFraction.Whole))
    if (Service == 0) {
        Service = 1
        basic.showString("Seb",60)
    } else if (Service == 1) {
        Service = 0
        basic.showString("Adversaire",60)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Service == 1) {
        basic.showNumber(Compteur_Seb,60)
basic.showNumber(Compteur_adversaire,60)
    } else if (Service == 0) {
        basic.showNumber(Compteur_adversaire,60)
basic.showNumber(Compteur_Seb,60)
    }
    basic.pause(1000)
    basic.clearScreen()
})
let Service = 0
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
let Compteur_adversaire = 0
let Compteur_Seb = 0
let Points_Seb = 0
let Points_adversaire = 0
Compteur_Seb = 0
Compteur_adversaire = 0
Points_Seb = 0
Points_adversaire = 0
Service = 0
