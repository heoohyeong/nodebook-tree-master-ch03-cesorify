var censortext = {};
censortext.censoredWords = [ "sad", "bad", "mad" ];
censortext.customCensoredWords = [];
censortext.censor = function (inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr;

}

censortext.addCensoredWord = function(word){
    customCensoredWords.push(word);
}
censortext.getCensoredWords = function(){
    return censoredWords.concat(customCensoredWords);
}

export default censortext
