const quotes = [
    {
    quote: 'I love not Man the less, but Nature more.',
    author: 'Lord Byron'
    },
    {
    quote: 'I like this place and could willingly waste my time in it.',
    author: 'William Shakespeare'
    },
    {
    quote: 'In the spring, at the end of the day, you should smell like dirt.',
    author: 'Margaret Atwood'
    },
    {
    quote: 'I think having land and not ruining it is the most beautiful art that anybody could ever want.',
    author: 'Andy Warhol'
    },
    {
    quote: 'Going to the mountains is like going home.',
    author: 'John Muir'
    },
    {
    quote: 'The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep.',
    author: 'Robert Frost'
    },
    {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations.',
    author: 'Tim O Reilly'
    },
    {
    quote: 'Not just beautiful, though—the stars are like the trees in the forest, alive and breathing. And they’re watching me.',
    author: 'Haruki Murakami'
    },
    {
    quote: 'Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts.',
    author: 'Rachel Carson'
    },
    {
    quote: 'Plant seeds of happiness, hope, success, and love; it will all come back to you in abundance. This is the law of nature.',
    author: 'Steve Maraboli'
    },
    ];

    const quote = document.querySelector("#quote span");
    const author = document.querySelector("#quote div");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
