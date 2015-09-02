function parseNote(string){

  var split=string.split("*");
    // console.log(split);
    if (split[1] !== undefined){
        beats = split[1];
    }
    else{
        beats = 1;
    }
    
    var myobject = {
        pitch:split[0],
        beats: parseInt(beats, 10)
    };
    
    return myobject;
    
}


function parseSong(string){
    var splitsong = string.split(" ");
    var newarray = [];
    for (i=0;i<splitsong.length;i++){
        // console.log(parseNote(splitsong[i]));
        newarray.push(parseNote(splitsong[i]));
        }
    
    return newarray;

}

// parseSong("C#*2 C#*6");


console.log(parseNote("tabish*3"));
console.log(parseNote("tabish"));
console.log(parseNote("C#*3"));
console.log(parseNote("Csdsf#*33234"));

console.log(parseSong("Afdsa lff fda"));
console.log(parseSong("fds sd C# FF"));
console.log(parseSong("Ab b"));


userinput = prompt("enter a song");
var notes = parseSong(userinput);
console.log(notes);
playSong(notes, 500);
// playSong(parseSong(userinput), 500);

// function jukebox(){
//     var userinput = prompt('Enter an input');
//     return playSong(parseSong, 500, jukebox);
// }

// jukebox();




