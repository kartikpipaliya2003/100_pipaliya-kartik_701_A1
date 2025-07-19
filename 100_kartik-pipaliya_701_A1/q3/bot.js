
module.exports.ChatbotReply = function(message) {
    message = message.toLowerCase();

    if(message.indexOf("hello") > -1 || message.indexOf("hi") > -1) {
        return "Hello! How can I help you with education today?";
    }
    else if(message.indexOf("school") > -1) {
        return "I study at My High School.";
    }
    else if(message.indexOf("favorite subject") > -1 || message.indexOf("like subject") > -1) {
        return "My favorite subject is javascript.";
    }
    else if(message.indexOf("grade") > -1 || message.indexOf("marks") > -1) {
        return "I scored good grades.";
    }
    else if(message.indexOf("study") > -1 || message.indexOf("prepare") > -1) {
        return "I recommend studying regularly and practicing problems daily.";
    }
    else if(message.indexOf("teacher") > -1) {
        return "My js teacher is very helpful and patient.";
    }
    else if(message.indexOf("bye") > -1 || message.indexOf("exit") > -1) {
        return "Goodbye! Keep learning and stay curious!";
    }
    else {
        return "Sorry, I can only answer questions about education. Try asking something else.";
    }
};
