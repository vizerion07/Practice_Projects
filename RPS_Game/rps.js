let move , comp , result = '';
let score = JSON.parse(localStorage.getItem('score'));

if(!score){
    score={
        Win: 0 , Lose: 0 , Tie: 0
    };
}
function computer(){
    move = Math.random();
    if(move < 1 / 3)        comp = 'Rock';
    else if(move < 2 / 3)   comp = 'Paper';
    else                    comp = 'Scissors'; 
    return comp;  
}

function playgame(choice){
    
    if(choice == 'Rock'){
        choice = '👊🏼';
        if(comp == 'Rock')          result = 'Tie' , score.Tie++ , comp = '👊🏼';
        else if(comp == 'Scissors') result = 'You Win!!!' , score.Win++ , comp = '✌🏼';
        else                        result = 'You lose' , score.Lose++ , comp = '✋🏼';    
    }
    else if(choice == 'Scissors'){
        choice = '✋🏼';
        if(comp == 'Scissors')      result = 'Tie' , score.Tie++ , comp = '✌🏼';
        else if(comp == 'Paper')    result = 'You Win!!!' , score.Win++ , comp = '✋🏼';
        else                        result = 'You lose' , score.Lose++ , comp = '👊🏼';    
    }
    else{
        choice = '✌🏼';
        if(comp == 'Paper')         result = 'Tie' , score.Tie++ , comp = '✋🏼';
        else if(comp == 'Rock')     result = 'You Win!!!' , score.Win++ , comp = '👊🏼';
        else                        result = 'You lose' , score.Lose++ , comp = '✌🏼'; 
    }

    localStorage.setItem('score' , JSON.stringify(score));

    update();
    document.querySelector('.moves').innerHTML = `You ${choice} - Computer's ${comp}`;
}
function update(){
    document.querySelector('.scoreDisplay').innerHTML = `Wins: ${score.Win} , Losses: ${score.Lose}  ,  Tie: ${score.Tie}`;

    document.querySelector('.result').innerHTML = result;

}