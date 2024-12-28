class MainHero {
    constructor(hp){
        this.hp = hp
    }
    damage(){
        setInterval(()=>{this.hp -= 10
            console.log(this.hp)
        },4000)

    }
}
const killer = new MainHero(100)