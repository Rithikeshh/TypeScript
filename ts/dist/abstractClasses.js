"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 10;
    }
}
class Instagram extends TakePhoto {
    constructor(name, cameraMode, brust) {
        super(name, cameraMode);
        this.brust = brust;
    }
    getSepia() {
        console.log(`${this.cameraMode} is now in sepia mode`);
    }
}
const take = new Instagram("test", "vivid", 10);
