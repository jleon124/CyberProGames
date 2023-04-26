class Obstacle {
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
    }

    draw(){
        if(this.type == 'car'){
        ctx1.fillStyle = 'blue';
        }
        else{
            ctx1.fillStyle = 'brown';
        }
        ctx1.fillRect(this.x,this.y, this.width, this.height);
    }
    // update(){
    //     this.x += this.speed * gameSpeed;
    //     if(this.x > canvas.width + this.width){
    //         this.x =0 -this.width;
    //     }
    // }
    update(){
        this.x += this.speed * gameSpeed;
        if(this.speed >0 ){
            if(this.x > canvas.width + this.width){
            this.x = 0 - this.width;

        } 
    }else{
            if(this.x <0 - this.width){
                this.x = canvas.width + this.width;
        }
    }
}
    
    
    
}
    function initObstactles() {
        //lane 1 cars going right
        for (let i = 0; i < 2; i++){
            let x = i * 350;
            carsArray.push(new Obstacle(x, canvas.height - grid * 2 -20, grid*2, grid, 1, 'car'));
        }
        //lane 2 cars going left
        for (let i = 0; i < 2; i++){
            let x = i * 300;
            carsArray.push(new Obstacle(x, canvas.height - grid * 3 -20, grid*2, grid, -2, 'car'));
        }

                //lane 3 cars going right
        for (let i = 0; i < 2; i++){
            let x = i * 350;
            carsArray.push(new Obstacle(x, canvas.height - grid * 4 -20, grid*2, grid, 5, 'car'));
        }

       //lane 4 logs going left
        for (let i = 0; i < 2; i++){
            let x = i * 300;
            logsArray.push(new Obstacle(x, canvas.height - grid * 5 -20, grid*2, grid-10, -2, 'log'));
        }
       //lane 5  going right
        for (let i = 0; i < 2; i++){
            let x = i * 350;
            logsArray.push(new Obstacle(x, canvas.height - grid * 6 -15, grid*2, grid-10, 5, 'log'));
        }

        
    }
    initObstactles();

    function handleObstacles(){
        for(let i = 0; i <carsArray.length; i++){
            carsArray[i].update();
            carsArray[i].draw();        
        }
        for(let i = 0; i <logsArray.length; i++){
            logsArray[i].update();
            logsArray[i].draw();        
        }

        //car collisions
        for(let i = 0; i < carsArray.length; i++){
            if(collision(frogger, carsArray[i])){
                resetGame();
            }
        }
        //log/turtle collision
        if(frogger.y < 250 && frogger.y > 100){
            safe = false;
            for(let i = 0; i < logsArray.length; i++){
            if (collision(frogger, logsArray[i])){
                frogger.x += logsArray[i].speed;
                safe = true;
            }
        }
        if(!safe){
            resetGame();
        }
        }
        frogger.draw();


    } 
