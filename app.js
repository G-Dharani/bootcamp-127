let score=[0,1];
var turn;
var team1={
    name:"REAL MADRID",
    runs:[],
    score:0,
}

var team2={
    name:"HUESCA",
    runs:[],
    score:0,
};
 
window.onload=()=>{
    selectTurn();
    updateScore();
    updateButtonText();
    updateName();
};

selectTurn=()=>{
turn= Math.floor(Math.random())+1;
};

updateButtonText=()=>{
  var button=  document.getElementById('strike');
    button.textContent=`${turn===1?team1.name:team2.name} Strike`;
};

updateScore=()=>{
    document.getElementById('team-1-score').textContent=team1.score;
    
    document.getElementById('team-2-score').textContent=team2.score;
};

updateName=()=>{
    document.getElementById('team-1-name').textContent=team1.name;
    document.getElementById('team-2-name').textContent=team2.name;
}