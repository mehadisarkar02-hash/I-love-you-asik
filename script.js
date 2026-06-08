// Elements

const hero = document.getElementById("hero");
const letterSection = document.getElementById("letterSection");
const resultSection = document.getElementById("resultSection");
const timelineSection = document.getElementById("timelineSection");
const promiseSection = document.getElementById("promiseSection");
const finalSection = document.getElementById("finalSection");

const openLetterBtn = document.getElementById("openLetterBtn");
const acceptBtn = document.getElementById("acceptBtn");

const typewriter = document.getElementById("typewriter");

// Love Letter Text

const letterText = `প্রিয় আসিক,

তুমি যখন প্রথম আমাকে তোমার মনের কথা বলেছিলে, তখন হয়তো আমি সঙ্গে সঙ্গে উত্তর দিতে পারিনি।

কিন্তু সত্যি বলতে, তোমার সেই কথাগুলো আমার হৃদয়ে গভীরভাবে জায়গা করে নিয়েছিল।

তোমার যত্ন, তোমার আন্তরিকতা, তোমার ভালোবাসা, আমার প্রতি তোমার সম্মান — সবকিছু ধীরে ধীরে আমাকে তোমার আরও কাছে নিয়ে এসেছে।

তুমি আমার জীবনের এমন একজন মানুষ, যার সাথে কথা বললে মন ভালো হয়ে যায়, যার উপস্থিতি অনুভব করলে হৃদয়ে শান্তি নেমে আসে।

অনেক ভেবেছি...

অনেক অনুভব করেছি...

আর আজ আমার উত্তর একটাই...

❤️ হ্যাঁ, আসিক ❤️

আমি তোমার প্রোপোজাল গ্রহণ করলাম।

ভালোবাসা সহ,

তোমার মনি ❤️`;

// Open Letter

openLetterBtn.addEventListener("click", () => {

    hero.classList.add("hidden");

    letterSection.classList.remove("hidden");

    startTyping();

});

// Typewriter Effect

function startTyping(){

    let i = 0;

    typewriter.innerHTML = "";

    const interval = setInterval(() => {

        typewriter.innerHTML += letterText.charAt(i);

        i++;

        if(i >= letterText.length){

            clearInterval(interval);

        }

    }, 35);

}

// Accept Proposal

acceptBtn.addEventListener("click", () => {

    letterSection.classList.add("hidden");

    resultSection.classList.remove("hidden");

    timelineSection.classList.remove("hidden");

    promiseSection.classList.remove("hidden");

    finalSection.classList.remove("hidden");

    launchHearts();

});

// Floating Hearts

function launchHearts(){

    const container = document.querySelector(".hearts");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (20 + Math.random() * 30) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 300);

}

// Love Counter

function updateCounter(){

    const startDate =
        new Date("2026-06-08T00:00:00");

    const now = new Date();

    const diff = now - startDate;

    const seconds =
        Math.floor(diff / 1000);

    const minutes =
        Math.floor(seconds / 60);

    const hours =
        Math.floor(minutes / 60);

    const days =
        Math.floor(hours / 24);

    const years =
        Math.floor(days / 365);

    const months =
        Math.floor((days % 365) / 30);

    const remainingDays =
        (days % 365) % 30;

    document.getElementById("loveCounter")
    .innerHTML = `

    ❤️ Together Since ❤️

    <br><br>

    08 June 2026

    <br><br>

    ${years} Years

    <br>

    ${months} Months

    <br>

    ${remainingDays} Days

    <br>

    ${hours % 24} Hours

    <br>

    ${minutes % 60} Minutes

    <br>

    ${seconds % 60} Seconds

    `;

}

setInterval(updateCounter, 1000);

updateCounter();

// Optional: Auto Hearts On Load

launchHearts();
