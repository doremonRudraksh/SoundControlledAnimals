var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0kY0bUBRi/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results)

        random_r = Math.floor(Math.random()*255) + 1;
        random_g = Math.floor(Math.random()*255) + 1;
        random_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected_voice").innerHTML = "Detected dog" + dog + "detected cat" + cat + "detected cow" + cow + "detected lion" + lion;
        document.getElementById("detected_voice").style.color = "rgb("+random_r+", "+random_g+", "+random_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice is of " + results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_r+", "+random_g+", "+random_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking"){
                img.src = "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg";
                document.getElementById("detected_voice").innerHTML =  "Detected Dog - "+ dog + " ";
        }
        else if(results[0].label == "Meowing"){
                img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
                cat = cat+1;
                document.getElementById("detected_voice").innerHTML = " Detected Cat - "+ cat;
         }
        else if(results[0].label == "Roar"){
                img.src = "https://th.bing.com/th/id/R.ed424ce7e8aa8e8ea5909c5ec394be07?rik=Q5S23Xusd9rU%2bQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fXXX%2fKTjXXX8gc.gif&ehk=KUdjPcBBkT%2fjY0VxirZWUyUob6J0qb5M73sJqKYFXbA%3d&risl=&pid=ImgRaw&r=0";
                lion = lion+1;
                document.getElementById("detected_voice").innerHTML = "&nbsp; Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
                img.src = "https://th.bing.com/th/id/R.b4e11dc2b70207cb94f423386acf3f2c?rik=j%2fSbeyNl%2b8Nc2Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9iR%2f5qE%2f9iR5qEgpT.gif&ehk=ShP2z1%2fWaL85z9sRKB1qRZaNUWwnJc9ykc22f6jdMGc%3d&risl=&pid=ImgRaw&r=0";
                cow = cow+1;
                document.getElementById("detected_voice").innerHTML = "&nbsp; Detected Cow - "+ cow;
            }
        else{
                img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
                background_noise = background_noise+1;
                document.getElementById("detected_voice").innerHTML = "&nbsp; Detected Background Noise - "+ background_noise;
        }
}
}
