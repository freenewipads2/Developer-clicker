export class Start{
    constructor(){
        this.name = "defaultUser";
        this.folder = "click-enter";

        this.cmdInput = "";

        this.replies = [];
        this.canInput = true;
    }

    submit(e){
        if(e.key == "Enter"){
            let reply = "-bash " + this.cmdInput + ": Command does not exist";
            this.replies.push(this.name + "-MacBook-Pro:" + this.folder + " " + this.name + "$ " + this.cmdInput);

            if(this.cmdInput == "help"){
                this.replies.push("Start new game au run --watch");
                this.replies.push("Load game au run env --username --watch");
            }

            else if(this.cmdInput.includes("au run") && this.cmdInput.includes("--watch")){
                if(this.cmdInput.includes("env")){
                    this.user = this.cmdInput.split("--")[1];
                    this.replies.push("Loading "+ this.user);
                    this.canInput = true;
                    for(let i = 0;i != 100;i++){
                        setTimeout(x =>{
                            this.replies.push("Building " + Math.random().toString(36).substr(2, 36) + " module");
                            document.getElementById("body").scrollTo(0,document.getElementById("body").scrollHeight);
                        },Math.floor((Math.random() * 1000) + 1));
                    }
                }
                else {
                    this.replies.push("Creating");
                }
            }
            
            else {
                this.replies.push(reply);
            }

            this.cmdInput = "";
        } else {
            this.cmdInput += e.key;
        }
    }
}