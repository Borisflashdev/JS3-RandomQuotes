const quoteBtn = document.getElementById('btn-box');
const quoteText = document.getElementById('quote-box');
const quoteAuthor = document.getElementById('author-box');

const randomQuoteHandler = () => {
    const num = Math.random();
    if (num <= 0.2 && num > 0.1) {
        quoteText.innerHTML = `Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got.`;
        quoteAuthor.innerHTML = 'Life';
    } else if (num <= 0.3 && num > 0.2) {
        quoteText.innerHTML = 'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all.';
        quoteAuthor.innerHTML = 'John Kenneth Galbraith';
    } else if (num <= 0.4 && num > 0.3) {
        quoteText.innerHTML = 'God save me from my friends. I can protect myself from my enemies.';
        quoteAuthor.innerHTML = 'Claude Louis Hector De Villars';
    } else if (num <= 0.5 && num > 0.4) {
        quoteText.innerHTML = 'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.';
        quoteAuthor.innerHTML = 'Tyne Daly';
    } else if (num <= 0.6 && num > 0.5) {
        quoteText.innerHTML = 'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.';
        quoteAuthor.innerHTML = 'Charles Lindbergh';
    } else if (num <= 0.7 && num > 0.6) {
        quoteText.innerHTML = 'The price of anything is the amount of life you exchange for it.';
        quoteAuthor.innerHTML = 'David Thoreau';
    } else if (num <= 0.8 && num > 0.7) {
        quoteText.innerHTML = 'Anyone who thinks that gardening begins in the spring and ends in the fall is missing the best part of the whole year. For gardening begins in January, begins with the dream.';
        quoteAuthor.innerHTML = 'Josephine Nuese';
    } else if (num <= 0.9 && num > 0.8) {
        quoteText.innerHTML = 'You might as well fall flat on your face as lean over too far backward.';
        quoteAuthor.innerHTML = 'James Thurber';
    } else if (num <= 1 && num > 0.9) {
        quoteText.innerHTML = 'Get your facts first, then you can distort them as you please.';
        quoteAuthor.innerHTML = 'Mark Twain'; 
    }
};

quoteBtn.addEventListener('click', randomQuoteHandler);