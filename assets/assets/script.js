var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}
function selectTopic() {
    if (topics[0] === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'Javascript') {
        console.log("Let's study Javascript!");
    } else {
        console.log('Please try again!');
  }   
}
console.log('Here are the topics we learned through Prework');
listTopics()
console.log('Which topic should we study first?');
selectTopic()