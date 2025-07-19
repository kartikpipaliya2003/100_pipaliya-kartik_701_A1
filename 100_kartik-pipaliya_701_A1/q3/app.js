// app.js

const Chatbot = require("./bot");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "You ==> "
});

console.log("Education Domain Chatbot");
console.log("Ask me about school,favorite subject,grade,study,teacher .");
console.log("Type your message or Ctrl+C to exit.");
rl.prompt();

rl.on('line', function(message) {
    const reply = Chatbot.ChatbotReply(message);
    console.log("Bot ==> " + reply);
    rl.prompt();
}).on('close', function() {
    console.log("\nGoodbye!");
    process.exit(0);
});
