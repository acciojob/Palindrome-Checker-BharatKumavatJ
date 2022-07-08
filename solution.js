// complete the given function

function palindrome(str){

    var e = str.length - 1;
    for(var s in str){
        if(s >= e){
            return true;
        }
        if(str[s] != str[e]) return false;
        e--;
    }
    return true;
}
module.exports = palindrome
