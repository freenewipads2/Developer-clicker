export class Start{
  constructor(){
    this.message = "|";
  }
  attached(){
    setInterval(x => {
      this.message += "|"
    },100);
    var audio = new Audio('resources/start.wav');
    audio.play();
    setTimeout(x =>{
      window.location =  "http://niviso.com/games/clicker/#/play";
      var audio = new Audio('resources/startup.wav');
      audio.play();
      var audio = new Audio('resources/bg.mp3');
      audio.play();
      audio.loop = true;
    },7000)
  }
}
