let quotes = [ 
    {
        quote: "It’s not a bug. It’s an undocumented feature!",
        author: "Anonymous"
    },
    {
        quote: "A website without visitors is like a ship lost in the horizon.",
        author : "Dr. Christopher Dayagdag"
    },
    {
        quote: "A user interface is like a joke. If you have to explain it, it’s not that good.",
        author : "Unknown"
    },
    {
        quote: "Great web design without functionality is like a sports car with no engine.",
        author : "Paul Cookson"
    },
    {
        quote: "Things aren’t always #000000 and #FFFFFF",
        author : "HTML Developer"
    },
    {
        quote: "Software undergoes beta testing shortly before it’s released. Beta is Latin for ‘still doesn’t work.’",
        author : "Unknown"
    },
    {
        quote: "A website without SEO is like a car with no gas.",
        author : "Paul Cookson"
    },
    {
        quote: "Responsive Web Design always plays an important role  whenever going to promote your website.",
        author: "Josh Wilson"
    },
];

// export const writtenQuotes = (quoteArray) => {
const writtenQuotes = (quoteArray) => {
    const randomQuotes = Math.floor(Math.random() * (quoteArray.length))
    let QUOTES = quoteArray[randomQuotes].quote;
    let AUTHERS = quoteArray[randomQuotes].author;
    return(
        <h1 className="text-3xl text-sky-500 font-Pacifico mx-2"> “{QUOTES}” <br /> <span className="text-xl text-rose-500 font-Marker italic"> - {AUTHERS}</span> </h1>
    )
}


// export const myQuotes = quotes;

export const types = writtenQuotes(quotes)


    
// writtenQuotes(myQuotes)