     //gooien 1 dobbelsteen
     //gooien 5 dobbelstenen
     //3 keer gooien max
     //bijhouden van dobbelstenen
     //scores berekenen
     //beste kiezen
       var Observable = function() //moet met hoofdletter!
       {
           var _self = this;
       
       _self.data;
               
           _self.subscribers = new Array();// [];
           
        _self.publish = function ( newData ) {
         
         var data;
         
               if(typeof newData === "undefined")
                   {
                       return _self.data;
                   }
               else
                   {
                       _self.data = newData;
             
                       for(var i in _self.subscribers) //overloopt van de 1e tot de laatste functie in de array 'subscribers' en voert die uit met de nieuwe data
                           {
                 _self.subscribers[i](_self.data);
                           }
                       return _self.data;
                   }
               console.log("publish method");
           }
      
       
       //klopt, wegschrijven in array subscribers
           _self.subscribe = function( callback ){
               _self.subscribers.push(callback);
           }
           
      }  
          
       
              
       //UITVOERING
       var model ={
       'teerling' : new Observable()
       };
       
       var nummers = [];
       var aantalWorpen = 0;

       
      /* var randomNumber = function()
       {
           return Math.floor(Math.random() * 7);
       }*/
    var randomNumber = [];
    var btn = document.getElementById('btn');
    var scoreHtml = document.getElementById('scoreHTML');
    var sum;
    var vastgezet = [false,false,false,false,false];
    var teerlingen = [document.getElementById('teerlingHTML_1'), document.getElementById('teerlingHTML_2'), document.getElementById('teerlingHTML_3'), document.getElementById('teerlingHTML_4'), document.getElementById('teerlingHTML_5')];
    var clickableScore = [document.getElementById('score1') ,document.getElementById('score2') ,document.getElementById('score3') ,document.getElementById('score4') ,document.getElementById('score5') ,document.getElementById('score6') ,document.getElementById('score7') ,document.getElementById('score8') ,document.getElementById('score9') ,document.getElementById('score10') ,document.getElementById('score11') ,document.getElementById('score12') ,document.getElementById('score13')];
var scoreHold = [false,false,false,false,false,false,false,false,false,false,false,false,false];
var getal1 = document.getElementById('getal1');
var getal2 = document.getElementById('getal2');
var getal3 = document.getElementById('getal3');
var getal4 = document.getElementById('getal4');
var getal5 = document.getElementById('getal5');
var getal6 = document.getElementById('getal6');
        //kijken of er op een dobbelsteen is gedrukt en deze in de array vastgezet op true zetten


    var disableBtn;
    disableBtn = document.getElementById("btn");
    disableBtn.disabled = false;
    
     btn.addEventListener('click', function() {

        if (aantalWorpen <=2){ //aantal worpen moet onder 3 blijven (0,1 en 2),anders naar else (disabled button)
      //loop plaatsen
      for (i = 0;i < 5;i++){
          if(!vastgezet[i])
              {
       randomNumber[i] = (Math.floor(Math.random() * 6 )) +1;
       //model.teerling.publish(randomNumber[i]);

           teerlingen[i].innerHTML = randomNumber[i];
          //scoreBerekenen(randomNumber,i);

              }
       };
       sum = randomNumber.reduce(function(a,b){return a+b;},0);
       scoreHTML.innerHTML = sum;
     aantalWorpen++;
     }//if onder 3 worpen einde
     if (aantalWorpen == 3)//disablen van button bij meer als 3 worpen
     {
      disableBtn.disabled = true;
      for(i=0;i<vastgezet.length;i++)
          {
              if(!vastgezet[i])
                  {
              vastgezet[i]=true;
              teerlingen[i].className = "teerling red";
              startScorePlus(randomNumber,i);
                  }
          }
             makeClickable();
     }
startScorePlus(randomNumber);
<<<<<<< HEAD
     });

var updateClickableAndReset = function(index)
{
    scoreHold[index] = true;
    clickableScore[index].className = "clicked";
    aantalWorpen = 0;
    disableBtn.disabled=false;
    for(i = 0;i < teerlingen.length; i++){
    vastgezet[i] = false;
    teerlingen[i].innerHTML = 0;
    turnGreen(i);
    randomNumber = [];
    }
    if(clickableScore[0].className != "clicked")
        {
            een = 0;
        }
    if(clickableScore[1].className != "clicked")
        {
            twee = 0;
        }
    if(clickableScore[2].className != "clicked")
        {
            drie = 0;
        }
    if(clickableScore[3].className != "clicked")
        {
            vier = 0;
        }
    if(clickableScore[4].className != "clicked")
        {
            vijf = 0;
        }
    if(clickableScore[5].className != "clicked")
        {
            zes = 0;
        }
    for(i = 0; i<clickableScore.length; i++)
        {
            if(clickableScore[i].className != "clicked")
                {
                    clickableScore[i].className = "";
                    clickableScore[i].children[2].children[0].innerHTML = "";
                    clickableScore[i].children[1].children[0].innerHTML = "";
                }
        }
    
}

var makeClickable = function()
{
    for(i = 0; i<clickableScore.length; i++)
        {
            if(clickableScore[i].children[2].children[0].innerHTML != "" && clickableScore[i].className != "clicked")
                {
                    clickableScore[i].className = "clickable";
                }
            if(clickableScore[i].children[2].children[0].innerHTML == "" && clickableScore[i].className != "clicked")
                {
                    clickableScore[i].className = "";
                }
            
            if(clickableScore[i].className == "clickable")
                {
                   clickableScore[i].addEventListener('click', updateClickableAndReset.bind(null,i));
                }
            else
                {
                    clickableScore[i].removeEventListener('click', updateClickableAndReset.bind(null,i));
                }
        }
}
=======
     });          
      
>>>>>>> refs/remotes/ajkea/master
/*
     var resetBtn = document.getElementsByClassName('restart');

     resetBtn.addEventListener('click',reset());
     function reset(){
      teerlingen.forEach(teerlingen.className == "teerling");
     }
*/
     function turnGreen(index){
         teerlingen[index].className = "teerling";
     }


      holdTeerling = function(index) //veranderen kleur bij aanklikken (bijhouden)
{
    vastgezet[index] = !vastgezet[index];
        if(teerlingen[index].className == "teerling red"){
                teerlingen[index].className = "teerling";
                startScoreMin(randomNumber,index);
            }
        else
            {
                teerlingen[index].className = "teerling red";
<<<<<<< HEAD
startScorePlus(randomNumber,index);
=======
                startScorePlus(randomNumber,index);
>>>>>>> refs/remotes/ajkea/master
            }
              makeClickable();
}

//functie aanklikken dobbelstenen
for(i = 0;i < teerlingen.length; i++){
    teerlingen[i].addEventListener('click', holdTeerling.bind(null,i));
}
var aantalNummer = [5]
var een=0,twee=0,drie=0,vier=0,vijf=0,zes=0;
var scoreEen=0,scoreTwee=0,scoreDrie=0,scoreVier=0,scoreVijf=0,scoreZes=0;
var two = false,three = false,four=false,five=false;
  
var chance = document.getElementById('scoreChance');

<<<<<<< HEAD
scoreBerekenenplus = function(array, teller){
=======
scoreBerekenenPlus = function(array, teller){
>>>>>>> refs/remotes/ajkea/master
  switch(array[teller]){
    case 1:
          een= een + 1;
        if (!scoreHold[0])
            {
                
                scoreEen= een*1;
                return getal1.innerHTML = een, scoreGetal1.innerHTML = scoreEen;
            }
                break;
          
    case 2:
           twee= twee + 1;
          if (!scoreHold[1])
              {
               
                scoreTwee = twee*2;
                return getal2.innerHTML = twee, scoreGetal2.innerHTML = scoreTwee;
              }
                break;

    case 3:
          drie= drie + 1;
          if (!scoreHold[2])
              {
                  
                  scoreDrie = drie*3;
                  return getal3.innerHTML = drie, scoreGetal3.innerHTML = scoreDrie;
            }
                  break;
              
          
    case 4:
          vier = vier + 1;
          if (!scoreHold[3])
              {
                  
                  scoreVier = vier*4;
                  return getal4.innerHTML = vier, scoreGetal4.innerHTML = scoreVier;
              }
                  break;

    case 5:
          vijf= vijf + 1;
          if (!scoreHold[4])
              {
                  
                  scoreVijf = vijf*5;
                  return getal5.innerHTML = vijf, scoreGetal5.innerHTML = scoreVijf;
              }
                  break;

    case 6:
          zes= zes + 1;
          if (!scoreHold[5])
              {
                  
                  scoreZes = zes*6;
                  return getal6.innerHTML = zes, scoreGetal6.innerHTML = scoreZes;
              }
                  break;
    default:
      break;
   }
<<<<<<< HEAD
    return een,twee,drie,vier,vijf,zes;
=======
   return een,twee,drie,vier,vijf,zes;
>>>>>>> refs/remotes/ajkea/master
 }

scoreBerekenenMin = function(array, teller){
  switch(array[teller]){
    case 1:
          een= een - 1;
          if (!scoreHold[0])
              {
                  
                  scoreEen= een*1;
                  if(een==0){
                  return getal1.innerHTML = "",scoreGetal1.innerHTML="";
                  }
                  else{
                  return getal1.innerHTML = een, scoreGetal1.innerHTML = scoreEen;
                  }
              }
      break;

    case 2:
          twee= twee - 1;
          if (!scoreHold[1])
              {
                  
                  scoreTwee = twee*2;
                  if(twee==0){
                  return getal2.innerHTML = "",scoreGetal2.innerHTML="";
                  }
                  else{
                  return getal2.innerHTML = twee, scoreGetal2.innerHTML = scoreTwee;
                  }
              }
                  break;

    case 3:
          drie= drie - 1;
          if (!scoreHold[2])
              { 
                  scoreDrie = drie*3;
                  if(drie==0){
                  return getal3.innerHTML = "",scoreGetal3.innerHTML="";
                  }
                  else{
                  return getal3.innerHTML = drie, scoreGetal3.innerHTML = scoreDrie;
                  }
              }
      break;

    case 4:
          vier = vier - 1;
          if (!scoreHold[3])
              {
                  
                  scoreVier = vier*4;
                  if(vier==0){
                  return getal4.innerHTML = "",scoreGetal4.innerHTML="";
                  }
                  else{
                  return getal4.innerHTML = vier, scoreGetal4.innerHTML = scoreVier;
                  }
              }
      break;

    case 5:
          vijf= vijf - 1;
          if (!scoreHold[4])
              {
                  scoreVijf = vijf*5;
                  if(vijf==0){
                  return getal5.innerHTML = "",scoreGetal5.innerHTML="";
                  }
                  else{
                  return getal5.innerHTML = vijf, scoreGetal5.innerHTML = scoreVijf;
                  }
              }
      break;

    case 6:
          zes= zes - 1;
          if (!scoreHold[5])
              {
                  scoreZes = zes*6;
                  if(zes==0){
                  return getal6.innerHTML = "",scoreGetal6.innerHTML="";
                  }
                  else{
                  return getal6.innerHTML = zes, scoreGetal6.innerHTML = scoreZes;
                  }
              }
      break;
    default:
      break;
   }return een,twee,drie,vier,vijf,zes;}
//score updaten

threeOfAKind = function(een,twee,drie,vier,vijf,zes){
  three=false;
  if(een ==3 || twee==3||drie==3||vier==3||vijf==3||zes==3){
    three=true;
    scoreThree.innerHTML = sum;
  }
}

fourOfAKind = function(een,twee,drie,vier,vijf,zes){
  four=false;
  if(een ==4 || twee==4||drie==4||vier==4||vijf==4||zes==4){
    four=true;
    scoreFour.innerHTML = sum;
  }
}

yahtzee = function(een,twee,drie,vier,vijf,zes){
<<<<<<< HEAD
  if(een ==5 || twee==5||drie==5||vier==5||zes==5)
  {
      scoreYahtzee.innerHTML=50;
  }
    if(vijf==5)
        {
          scoreYahtzee.innerHTML=250;  
        }
}

paar = function(een,twee,drie,vier,vijf,zes){
    two=false;
  if(een ==2 || twee==2||drie==2||vier==2||vijf==2||zes==2) two=true;
=======
  if(een ==5 || twee==5||drie==5||vier==5||vijf==5||zes==5){
    scoreYahtzee.innerHTML=50;
  };
}

paar = function(een,twee,drie,vier,vijf,zes){
  two=false;
  if(een ==2 || twee==2||drie==2||vier==2||vijf==2||zes==2)two=true;
>>>>>>> refs/remotes/ajkea/master
}

fullHouse = function(threeOfAKind,paar){
  if(threeOfAKind==true && paar == true){
    scoreFullHouse.innerHTML = 25;
  }
}

chance = function(array){
  sum = array.reduce(function(a,b){return a+b;},0);
  scoreChance.innerHTML = sum;
}

smallStraight = function(){
    getallen = randomNumber.sort();
    var longest = 0;
    var sequence = 0;
    for(i=1; i<getallen.length; i++)
        {
            var d = getallen[i] - getallen[i-1];
            switch (d)
                {
                    case 0:
                        break;
                    case 1:
                        sequence += 1;
                        break;
                    default:
                        if(sequence > longest)
                            {
                                longest = sequence;
                            }
                        break;
                }
        }
    if(sequence > 2)
        {
            scoreSmallStraight.innerHTML=30;
            return true;
        }
    
    return false;
}

largeStraight = function(){
    getallen = randomNumber.sort();
    var sequence = 0;
    var longest = 0;
    for(i=1; i<getallen.length; i++)
        {
            var d = getallen[i] - getallen[i-1];
            switch (d)
                {
                    case 0:
                        break;
                    case 1:
                        sequence += 1;
                        break;
                    default:
                        if(sequence > longest)
                            {
                                longest = sequence;
                            }
                        break;
                }
        }
    if(sequence > 3)
        {
            scoreLargeStraight.innerHTML = 40;
            return true;
        }

    return false;
}

startScorePlus = function(array,teller){
  scoreBerekenenPlus(array,teller);
  threeOfAKind(een,twee,drie,vier,vijf,zes);
  fourOfAKind(een,twee,drie,vier,vijf,zes);
  yahtzee(een,twee,drie,vier,vijf,zes);
  paar(een,twee,drie,vier,vijf,zes);
  fullHouse(three,two);
  smallStraight();
  largeStraight();
  chance(array);
}

startScoreMin = function(array,teller){
  scoreBerekenenMin(array,teller);
  threeOfAKind(een,twee,drie,vier,vijf,zes);
  fourOfAKind(een,twee,drie,vier,vijf,zes);
  yahtzee(een,twee,drie,vier,vijf,zes);
  paar(een,twee,drie,vier,vijf,zes);
  fullHouse(een,twee,drie,vier,vijf,zes);
  smallStraight();
  largeStraight();
  chance(array);
}



     
       //Document.getElementsByClassName("btn").addEventListener("click", teerling.publish(randomNumber()));
       // Wanneer op teerling geklikt wordt moet willekeurig getal gegenereerd worden
       // Getal moet gepublished worden naar de teerling
       // teerling.publish(5)
       
       // Scoreboard moet zich inschrijven op wijzigingen van de teerling

      /*       
       var updateTeerling = function ( value, number )
       {
        for(i=0;i< 5;i++){
           teerlingen[i].innerHTML = value;
           }
       }

       var updateScore = function ( newScore )
       {
           scoreHTML.innerHTML = newScore;
       }
     
     model.teerling.subscribe(updateTeerling);
       
     model.teerling.subscribe( updateScore );
       */