// creates an array of objects to store quote related information
const quotes = [
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        category: "#programming"
    },
    {
        quote: "What one programmer can do in one month, two programmers can do in two months.",
        source: "Fred Brooks",
        category: "#programming"
    },
    {
        quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
        source: "Andy Hunt",
        category: "#programming"
    },
    {
        quote: "One of the best programming skills you can have is knowing when to walk away for awhile.",
        source: "Oscar Godson",
        category: "#programming"
    },
    {
        quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
        source: "Louis Srygley",
        category: "#programming"
    }
];
// creates an array of objects to store background and button color information
// I didn't want to fully randomize the color because it can sometimes lead to poor contrast between quotes and background
const colors = [
    {
        background: "#ff2e63", //pink
        button: "#252a34"
    },
    {
        background: "#00adb5", //teal
        button: "#393e46"
    },
    {
        background: "#f38181", //salmon
        button: "#625772"
    },
    {
        background: "#6639a6", //purple
        button: "#521262"
    },
    {
        background: "#3f72af", //blue
        button: "#112d4e"
    },
    {
        background: "#f95959", //orange
        button: "#455d7a"
    },
    {
        background: "#a3de83", //lt green
        button: "#2eb872"
    },
    {
        background: "#118df0", //bright blue
        button: "#0e2f56"
    },
    {
        background: "#ff5722", //bright orange
        button: "#393e46"
    },
    {
        background: "#3fc1c9", //aqua
        button: "#fc5185"
    },
    {
        background: "#e6a4b4", //very soft red
        button: "#c86b85"
    }
];
// will be used to store the previously returned quotes
const quotesReturned = [];
let colorsReturned = [];
let timer;

/**
 * selects a random quote object from the quotes array
 * @return {object} randomly selected quotes object
 */
function getRandomQuote() {
    // if no objects remain in the quotes array, restores the quotes array to its original state by combining the two arrays
    if (quotes.length === 0) {
        quotes.push.apply(quotes, quotesReturned);
    }
    
    while (quotes.length > 0) {
        const randomQuote = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomQuote];

        // adds the selected quote to the quotesReturned array
        quotesReturned.push(quote);
        // removes the selected quote from the quotes array
        quotes.splice(randomQuote, 1);

        return quote;
    }
}

/**
 * selects a random quote object from the colors array
 * @return {object} randomly selected colors object
 */
function getRandomColor() {
    // if no objects remain in the colors array, restores the colors array to its original state by combining the two arrays
    // and resets the colorReturned array to an empty array
    if (colors.length === 0) {
        colors.push.apply(colors, colorsReturned);
        colorsReturned = [];
    }

    while (colors.length > 0) {
        const randomColor = Math.floor(Math.random() * colors.length);
        const color = colors[randomColor];

        // adds the selected color to the colorsReturned array
        colorsReturned.push(color);
        // removes the selected color from the colors array
        colors.splice(randomColor, 1);

        return color;
    }
}

// assigns a setInterval method to the variable so that the printQuote function will automatically run after 10 seconds
function startTimer(interval) {
    // clears the setInterval method from the timer variable
    clearInterval(timer);
    timer = setInterval(printQuote, interval);
}

function printQuote() {
    // creates the currentQuote variable and sets the value to the random object that is returned when the getRandomQuote function is called
    // creates the currentColor variable and sets the value to the random object that is returned when the getRandomColor function is called
    // creates the html variable and uses the currentQuote variable along with key values to build a string
    const currentQuote = getRandomQuote();
    const currentColor = getRandomColor();
    let html = "";
    html = "<p class='quote'> " + currentQuote.quote + "</p>";
    html += "<p class='source'> " + currentQuote.source;
    // tests to see if the citation property is present in the currentQuote and if so, adds it to the string
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
    }
    // tests to see if the date property is present in the currentQuote and if so, adds it to the string
    if ("date" in currentQuote) {
        html += "<span class='year'> " + currentQuote.date + "</span>";
    }
    html += "<span class='category'> " + currentQuote.category + "</span>";

    // writes the info from the html variable to the div with the quote-box id
    // uses the currentColor variable to change the background color
    // uses the currentColor variable to change the button color
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = currentColor.background;
    document.getElementById("loadQuote").style.background = currentColor.button;

    // clears any previous timers that might be running and starts a new one
    startTimer(10000);
}

// runs the printQuote function upon initial page load
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
