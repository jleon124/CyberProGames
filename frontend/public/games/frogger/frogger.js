class Frogger {
    constructor(){
        this.width = 50;
        this.height = 50;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;

    }

    update(){
        //moving up
        if (keys[38]){
            if (this.moving === false)
            {
                this.y -= grid;
                this.moving = true;
            }
        }
        //moving down
        if (keys[40]){
            if (this.moving === false)
            {
                if(this.y < canvas.height - this.height *2 && this.moving ===false){
                    this.y += grid;
                    this.moving = true;
                }
            }
        }
        //moving left
        if (keys[37]){

                if(this.moving === false && this.x > this.width){
                    this.x -= grid;
                    this.moving = true;
            
            }
        }

        //moving right
        if (keys[39]){
                if(this.moving === false && this.x < canvas.width - this.width *2){
                    this.x += grid;
                    this.moving = true;
                
            }
        }
        if(this.y < 0){

            scored();
        }

    }

    draw(){
 
        ctx3.fillStyle = 'green';
        ctx3.fillRect(this.x,this.y, this.width, this.height);
    }

    jump(){
        console.log(this.moving);
    }
}

const frogger = new Frogger();
