export class User{
    constructor(){
        this.name = "defaultName";
        this.units = 0;
        this.skills = [];
    }
    init(name, units, skills){
        this.name = name;
        this.units = units;
        this.skills = skills;
    }
    setUnits(i){
        this.units += i;
    }
}