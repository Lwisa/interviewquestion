function myFunction(){
let text;
const d = new Date();
let time = d.toTimeString();

let choose = prompt( "What is the Weather like today?" + " 1.Rainy " + "2.Sunshine" + " 3.Winter", 
 "Rainy");


switch(choose.toLowerCase()){
    case "rainy":{
       text= " The weather today is Rainy"
        break;
    }

    case "sunshine":{
        text= "The weather today is Sunshine"
        break;
    }
    case "winter":{
        text="The weather today is Winter"
        break;

    }
    default:{
        text="Unknown weather type"
        break;
    }
}
    document.getElementById("demo").innerHTML= text + ". And the time is " + time;

   

}
