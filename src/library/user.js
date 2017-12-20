export class User{
    constructor(name, units, skills){
        this.name = name;
        this.units = units;
        this.skills = skills;
    }

    setUnits(i){
        this.units += i;
    }
}