let topics = ["HTML", "CSS", "Git", "JavaScript"];

let topic = topics[Math.floor(Math.random() * topics.length)];

let listTopics = () => {
    for (let idx = 0; idx < topics.length; idx++) {
        console.log(topics[idx])
    }
}

let selectTopics = () => {
    if (topic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topic === 'Git') {
        console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}
console.log("These are topics we learned through Prework")
listTopics()
console.log("============================================")
console.log("Which topic should we study?")
selectTopics()
