/**
 * 
 *  Written by Lucius Lin in Taipei in Taiwan on 2015.12.25(Fri.). 
 * 
*/

var L = parseInt(readline());
var H = parseInt(readline());
var T = readline();

var dictionary = new Array(H);
for(var i=0; i<H; i++){
    dictionary[i] = new Array(L*27);
}

for (var i = 0; i < H; i++) {
    dictionary[i] = readline().split("");
}

for(var i=0; i<H; i++){
    var tempStr = "";
    for(var j=0; j<dictionary[i].length; j++){
        tempStr += dictionary[i][j];
    }
}

var ascii_art = new Array(H);

for(var i=0; i<H; i++){
     ascii_art[i] = new Array(T.length*L);
}

var characters = T.split("");

for(var i=0; i<T.length; i++){
    if( (characters[i].charCodeAt(0)>='A'.charCodeAt(0) && characters[i].charCodeAt(0)<='Z'.charCodeAt(0)) || (characters[i].charCodeAt(0)>='a'.charCodeAt(0) && characters[i].charCodeAt(0)<='z'.charCodeAt(0)) ){
        for(var k=0; k<H; k++){
            for(var j=0; j<L; j++){
                ascii_art[k][i*L+j] = dictionary[k][(characters[i].toUpperCase().charCodeAt(0)-'A'.charCodeAt(0))*L+j];
            }
        }
    }else{
        for(var k=0; k<H; k++){
            for(var j=0; j<L; j++){
                ascii_art[k][i*L+j] = dictionary[k][26*L+j];
            }
        }
    }
}

for(var i=0; i<H; i++){
    var output = "";
    for(var j=0; j<L*T.length; j++){
        output += ascii_art[i][j];
    }
    print(output);
}
