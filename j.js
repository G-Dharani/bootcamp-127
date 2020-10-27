var count = 0;
var runteam1 = [];
var runteam2 = [];
var score1;
var score2;
function level1() {
    randomNumber = Math.floor(Math.random() * 2);;
    count = count + 1;

    console.log("count ", count);
    if (count == 11) {
        // document.getElementsByClassName('btn').style.visibility = "hidden";
        document.getElementsByClassName("btn")[0].style.visibility="hidden"

        document.getElementById("result2").style.visibility = "visible";
        document.getElementsByClassName("container1")[0].style.visibility="visible"

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        console.log("Team 1 " + runteam1)
        console.log("Team 2 " + runteam2)
        score1 = runteam1.reduce(reducer);
        score2 = runteam2.reduce(reducer);
        var teamname1 = document.getElementById("team-21-name").textContent;
        var teamname2 = document.getElementById("team-22-name").textContent;
        if (score1 < score2) {
            document.getElementById("result2").innerHTML = teamname2 + " Winner"
            document.getElementById("teamimg").src = "./assests/"+teamname2+".png"  
            document.getElementById("team-1-name").innerHTML=teamname2 ; 
        }
        else if (score1 == score2) {
            document.getElementById("result2").innerHTML = " Match draw try again"
        }
        else {
            document.getElementById("result2").innerHTML = teamname1 + " Winner"
            document.getElementById("teamimg").src = "./assests/"+teamname1+".png"  
            document.getElementById("team-1-name").innerHTML=teamname1 ; 
        }
        document.getElementById('board').style.visibility = "visible";
        document.getElementsByClassName("btn2")[0].style.visibility="visible"

    }
    else if (count % 2 == 0) {

        runteam2.push(player02(randomNumber));
        document.querySelector('#btn1').innerHTML = 'Shoot ' + name;
    }
    else {
        runteam1.push(player01(randomNumber));
        document.querySelector('#btn1').innerHTML = 'Shoot ' + name;
    }

}

var index1 = 0;
function player01(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress21").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index1++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index1++].style.backgroundColor = "#f00";
    }
    return randomNumber;
}

var index2 = 0;
function player02(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress22").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index2++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index2++].style.backgroundColor = "#f00";
    }
    return randomNumber;

}
































