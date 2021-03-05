function rset(){
    document.getElementById("reset").reset();
}  
function counter(){
    var x = document.getElementById("box").value;
    var len = x.split(" ").join("").length;
    document.getElementById("demo").innerHTML = len;
}
function vowel_count()
{
    var str1 = document.getElementById("box").value;
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for ( var i = 0; i < str1.length; i++){
        if(vowel_list.indexOf(str1[i]) !== -1){
            vcount += 1;
        }
    }
    document.getElementById("demo1").innerHTML=vcount;
}

function sp_char(){
    var str1 = document.getElementById("box").value;
    var sval = 0 ;
    var sc='`~!@#$%^&*()_+{}|:/<>?-=[]\;,."'
    for(var i = 0 ; i < str1.length; i++){
        if(sc.indexOf(str1[i]) != -1){
            sval += 1;
        }
    }
    document.getElementById("demo2").innerHTML=sval;
}

function num_count(){
    var str1 = document.getElementById("box").value;
    var nval = 0 ;
    var nc='1234567890';
    for(var i = 0 ; i < str1.length; i++){
        if(nc.indexOf(str1[i]) !== -1){
            nval += 1;
        }
    }
    document.getElementById("demo3").innerHTML=nval;
}

function display(){
    counter();
    vowel_count();
    sp_char();
    num_count();
}
