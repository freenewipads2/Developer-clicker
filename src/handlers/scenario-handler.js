import { inject } from 'aurelia-framework';
import {User} from 'library/user';
@inject(Upgrades)
export class ScenarioHandler{
  constructor(message, when){
    this.filterElement = $(".filter");
    this.message = message;
    this.trigger = when;
  }


  help(){

  }
}
