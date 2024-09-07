function getBotResponse(input) {
    //rock paper scissors
    if (input == "dro") {
        return new Date().toLocaleTimeString();
    } else if (input == "dge") {
        return new Date().toDateString();
    } else if (input == "help") {
        return "CMD: gamarjoba, lokacia, dro, kargad, dge";
    }

    // Simple responses
    if (input == "gamarjoba") {
        return "Gagimarjos, Rogor Xar";
    } 
    else if (input == "kargad") {
        return "Mec kargad Madloba";  
    }
    else if (input == "Lokacia"){
        return "Otar Chkeidzis 5a"
    } 
    else {
        return "Wrong Command, Try CMD:help";
    }
}