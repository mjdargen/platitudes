window.addEventListener("load", main);

function main() {
    let platButton = document.getElementById("plat");
    platButton.addEventListener("click", getRandomPlatitude);
    loadColor();
}

function getRandomPlatitude() {
    let resultField = document.getElementById("platitude");
    let p1, p2;

    if (shuffleArray([true, false])) {
        p1 = platitudes[getRandomInt(platitudes.length)];
        p1 = p1.split(" ");
        shuffleArray(p1);
    }
    else {
        p1 = platitudes[getRandomInt(platitudes.length)];
        platitudes.splice(platitudes.indexOf(p1), 1);
        p1 = p1.split(" ");
        p2 = platitudes[getRandomInt(platitudes.length)];
        p2 = p2.split(" ");
        shuffleArray(p1);
        shuffleArray(p2);
        p1 = p1.concat(p2);
        shuffleArray(p1);
    }

    result = p1.join(" ");
    result = result.toLowerCase();
    result = result.charAt(0).toUpperCase() + result.slice(1);
    resultField.textContent = result;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


const platitudes = [
    "There's no I in Team",
    "Good things come to those who wait",
    "It was meant to be",
    "The definition of insanity is doing the same thing and expecting different results.",
    "Time heals all wounds",
    "Such is life",
    "Forgive and forget",
    "Everything happens for a reason",
    "People are our most important asset",
    "It is what it is",
    "What the mind can conceive, it can achieve",
    "Winners never quit",
    "What doesn't kill me will only make me stronger",
    "I don't want a team of champions, I want a champion team.",
    "Teamwork to make the Dream work",
    "C'est la vie",
    "Hard work always pays off",
    "God has a plan for you",
    "Great minds think alike",
    "Money can't buy happiness",
    "Live each moment like it's your last",
    "If at first you don't succeed, try try again",
    "Follow your passion",
    "Follow your bliss",
    "That's just my personal opinion",
    "Let's not reinvent the wheel",
    "It's not rocket science",
    "It's all good",
    "What goes up, goes down",
    "After the storm the sun will shine",
    "Don't assume - it makes an ASS out of U and ME",
    "Don't be sad because it's over, be glad that it happened",
    "Love means never having to say you're sorry",
    "We are where we are",
    "What goes around comes around",
    "What's done is done",
    "Waste not want not",
    "It has to be somewhere",
    "Nice guys finish last",
    "Go with the flow",
    "Only dead fish go with the flow",
    "No offense, but…",
    "Rome wasn't built in a day",
    "Work smarter, not harder",
    "There's no I in team",
    "Life doesn't give you things you can't handle",
    "You're as young as you feel",
    "Age is just a number",
    "It's just software",
    "We're all in this together",
    "Everything always works out in the end",
    "Time heals all wounds",
    "We'll all be laughing about this soon",
    "It's doesn't matter if you win or lose, only that you try",
    "Tomorrow is another day",
    "It could be worse",
    "You are what you eat",
    "It's neither here nor there",
    "Think outside the box",
    "It will all look better in the morning",
    "Take the lemons and make lemonade",
    "The best things in life are free",
    "It wasn't meant to be",
    "Better to have loved and lost…",
    "That's for me to know and you to find out",
    "Better late than never",
    "With all due respect",
    "The road to hell is paved with good intentions",
    "Gossip is the devil's radio",
    "Laugh and the world laughs with you",
    "People regret the things they didn't do",
    "Beauty is only skin deep",
    "You can't judge a book by it's cover",
    "Work hard, play hard",
    "Only the good die young",
    "All's fair in love and war",
    "All men are created equal",
    "There are plenty more fish in the sea",
    "The more things change, the more they stay the same",
    "It's the darkest just before dawn",
    "Fail harder",
    "Perception is reality",
    "you can be anything that you want to be",
    "Patience is a virtue",
    "I'm sorry that's not what you want to hear",
    "This will hurt me more than it hurts you",
    "The customer is always right",
    "If you can't stand the heat, get out of the kitchen",
    "Success is the ability to go from one failure to another with no loss of enthusiasm",
    "Be careful what you wish for",
    "With great power comes great responsibility",
    "Just think about how much worse other people have it",
    "God never gives us more than we can bear",
    "It doesn't matter who scores, as long as the team wins.",
    "Sacrifice today for a better tomorrow.",
    "Nobody's perfect.",
    "Good things come to those who wait.",
    "Life is a mystery.",
    "That's just my personal opinion.",
    "I wish I knew then what I know now.",
    "Sometimes bad things lead to good things.",
    "What doesn't kill you makes you stronger.",
    "We all die someday.",
    "Everybody changes.",
    "It really do be like that sometimes.",
    "Take the good with the bad.",
    "Everything isn't always what it seems.",
    "Everything happens for a reason.",
    "Whatever will be, will be.",
    "Every cloud has a silver lining.",
    "Where there's a will, there's a way.",
    "A picture is worth a thousand words.",
    "Actions speak louder than words.",
    "You can't judge a book by its cover.",
    "Honesty is the best policy.",
    "You can't make an omelette without breaking eggs.",
    "You can't have your cake and eat it too.",
    "A bird in the hand is worth two in the bush.",
    "You can't have your feet in two boats.",
    "Time heals all wounds.",
    "Give a man a fish, and you feed him for a day; teach a man to fish, and you feed him for a lifetime.",
    "The early bird catches the worm.",
    "You can't make a silk purse out of a sow's ear.",
    "You can't have everything, where would you put it?",
    "You can't run before you can walk.",
    "The grass is always greener on the other side.",
    "A penny saved is a penny earned.",
    "The proof of the pudding is in the eating.",
    "The squeaky wheel gets the grease.",
    "You can't judge a person by their appearance.",
    "Where there's smoke, there's fire.",
    "The apple doesn't fall far from the tree.",
    "Give credit where credit is due."
]



function loadColor() {
    // get elements
    let body = document.getElementsByTagName("body")[0];
    let hexResponse = document.getElementById("hexColor");
    let rgbResponse = document.getElementById("rgbColor");

    // retrieve date information
    const d = new Date();
    const year = d.getFullYear();   // Get year as a four digit number (yyyy)
    const month = d.getMonth();     // Get month as a number (0-11)
    const day = d.getDate();        // Get day as a number (1-31)
    const weekDay = d.getDay();     // Get weekday as a number (0-6)

    // compute pseudorandom colors for each day
    let r = year - 2000 << 6 * 3 | month << 6 * 2 | day << 6 * 1 | weekDay;
    let g = month << 6 * 3 | day << 6 * 2 | weekDay << 6 * 1 | year - 2000;
    let b = year << 6 * 3 | weekDay << 6 * 2 | month - 2000 << 6 * 1 | day;
    r = mulberry32(r);
    g = mulberry32(g);
    b = mulberry32(b);

    // compute rgb/hex and complementary value
    let bgColor = `rgb(${r}, ${g}, ${b})`;
    let bgHex = "#" + hexConversion(r) + hexConversion(g) + hexConversion(b);
    let color = computeColor(r, g, b);

    // assign color values
    body.style.backgroundColor = bgColor;
    body.style.color = color;
}

// pseudorandom number algorithm
// produces same result for identical seed
// modified to return value between 0-255
function mulberry32(a) {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    t = ((t ^ t >>> 14) >>> 0) / 4294967296
    return Math.floor(t * 255);
}

// converts to hex value
function hexConversion(n) {
    let result;
    if (n < 16) result = "0" + n.toString(16);
    else result = n.toString(16);
    return result.toUpperCase();
}

// computes best complimentary color for font
// either black or white based on distance vector
function computeColor(r, g, b) {
    let d1 = Math.sqrt((r - 0) ** 2 + (g - 0) ** 2 + (b - 0) ** 2);
    let d2 = Math.sqrt((r - 255) ** 2 + (g - 255) ** 2 + (b - 255) ** 2);
    if (d1 > d2) return "black";
    else return "white";
}