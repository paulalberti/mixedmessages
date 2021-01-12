'use strict'
// Custom greeting
const intro = [
    `I am Amy Stake.`,
    `My name is Barb Dwyer.`,
    `Please to meet you, I am Chris P Baker.`,
    `Hey, I am Ella Vader.`,
    `Hey, Hugh Jass here.`,
    `My parents call me Mike Rotch.`
];
// Custom message
const message = [
    `I love spending time with my friend, Emma Roids, and telling jokes like this one...`,
    `My best friend is Robyn Banks who told me this joke...`,
    `My teacher, Tim Burr told me this great joke...`,
    `Zoltan Pepper once told me this great joke...`,
    `Before Phil McCraken died, he told me this great joke...`
];
// Terrible joke
const jokes = [
    `Dad, did you get a haircut? \nNo, I got them all cut!`,
    `My wife is really mad at the fact that I have no sense of direction. \nSo I packed up my stuff and right!`,
    `How do you get a squirrel to like you? \nAct like a nut.`,
    `Why don't eggs tell jokes? \nThey'd crack each other up.`,
    `I don't trust stairs. \nThey're always up to something.`,
    `What do you call someone with no body and no nose? \nNobody knows.`
];
// random message generator
const random = function (arr) {
    return Math.floor(Math.random() * arr.length)
};

const getMessage = function () {
    document.getElementById("newMessage").innerHTML = `${intro[random(intro)]}\n${message[random(message)]}\n${jokes[random(jokes)]}`;
  }
