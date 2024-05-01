abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime():number{
        return 10
    }
}
class Instagram extends TakePhoto{
    constructor(name: string, cameraMode: string, public brust: number){
        super(name, cameraMode)
    }
    getSepia(): void {
        console.log(`${this.cameraMode} is now in sepia mode`)
    }
}
const take = new Instagram("test", "vivid", 10);