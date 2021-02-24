const quotes = ['quote1', 'quote2', 'quote3'];

const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

module.exports = {
    quotes,
    getRandomQuote
};