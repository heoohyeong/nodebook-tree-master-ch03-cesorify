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
    censortext.customCensoredWords.push(word);
}
censortext.getCensoredWords = function(){
    return censortext.censoredWords.concat(censortext.customCensoredWords);
}

module.exports = censortext

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
// 충돌 테스트 입니다. 다시

censortext.addCensoredWord = function(word){
    censortext.customCensoredWords.push(word);
}
censortext.getCensoredWords = function(){
    return censortext.censoredWords.concat(censortext.customCensoredWords);
}

module.exports = censortext
