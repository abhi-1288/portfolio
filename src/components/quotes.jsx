import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const quotes = [
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House"
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "Good design is obvious. Great design is transparent.",
    author: "Joe Sparano"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    quote: "Code never lies, comments sometimes do.",
    author: "Ron Jeffries"
  }
];


export default function QuoteRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 10000); // 10 sec
    return () => clearInterval(interval);
  }, [])

  const { quote, author } = quotes[index];

  return (
    <div id="myQuotes" className="text-center m-4 p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // important for animation to re-trigger
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl text-sky-500 font-Pacifico mx-2">
            “{quote}”
            <br />
            <span className="text-xl text-rose-500 font-Marker italic">
              - {author}
            </span>
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
