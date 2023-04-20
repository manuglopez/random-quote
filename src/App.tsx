import './App.css'
import {useState} from "react";


function App() {
    interface Quote {
        q: string,
        a: string,
        c: string,
        h: string
    }

    const quotes: Quote[] = [

        {
            "q": "Happiness is a quality of the soul...not a function of one's material circumstances.",
            "a": "Aristotle",
            "c": "84",
            "h": "<blockquote>&ldquo;Happiness is a quality of the soul...not a function of one's material circumstances.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
        },
        {
            "q": "Nothing makes a man broad-minded like adversity.",
            "a": "Will Rogers",
            "c": "48",
            "h": "<blockquote>&ldquo;Nothing makes a man broad-minded like adversity.&rdquo; &mdash; <footer>Will Rogers</footer></blockquote>"
        },
        {
            "q": "Not everything that weighs you down is yours to carry.",
            "a": "Unknown",
            "c": "54",
            "h": "<blockquote>&ldquo;Not everything that weighs you down is yours to carry.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
        },
        {
            "q": "What one does is what counts. Not what one had the intention of doing.",
            "a": "Pablo Picasso",
            "c": "70",
            "h": "<blockquote>&ldquo;What one does is what counts. Not what one had the intention of doing.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>"
        },
        {
            "q": "Be thankful for everything that happens in your life; it's all an experience.",
            "a": "Roy T. Bennett",
            "c": "77",
            "h": "<blockquote>&ldquo;Be thankful for everything that happens in your life; it's all an experience.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
        },
        {
            "q": "You must be willing to do what others won't do, to have what others won't have.",
            "a": "Les Brown",
            "c": "79",
            "h": "<blockquote>&ldquo;You must be willing to do what others won't do, to have what others won't have.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
        },
        {
            "q": "It's your life; you don't need someone's permission to live the life you want. Be brave to live from your heart.",
            "a": "Roy T. Bennett",
            "c": "112",
            "h": "<blockquote>&ldquo;It's your life; you don't need someone's permission to live the life you want. Be brave to live from your heart.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
        },
        {
            "q": "For your life to be great, your faith must be bigger than your fear.",
            "a": "Robin Sharma",
            "c": "68",
            "h": "<blockquote>&ldquo;For your life to be great, your faith must be bigger than your fear.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
        },
        {
            "q": "Strategy is a commodity, execution is an art.",
            "a": "Peter Drucker",
            "c": "45",
            "h": "<blockquote>&ldquo;Strategy is a commodity, execution is an art.&rdquo; &mdash; <footer>Peter Drucker</footer></blockquote>"
        },
        {
            "q": "If you look for perfection, you'll never be content.",
            "a": "Leo Tolstoy",
            "c": "52",
            "h": "<blockquote>&ldquo;If you look for perfection, you'll never be content.&rdquo; &mdash; <footer>Leo Tolstoy</footer></blockquote>"
        },
        {
            "q": "Hope itself is like a star- not to be seen in the sunshine of prosperity, and only to be discovered in the night of adversity.",
            "a": "Charles Spurgeon",
            "c": "126",
            "h": "<blockquote>&ldquo;Hope itself is like a star- not to be seen in the sunshine of prosperity, and only to be discovered in the night of adversity.&rdquo; &mdash; <footer>Charles Spurgeon</footer></blockquote>"
        },
        {
            "q": "Failure is the key to success; each mistake teaches us something.",
            "a": "Morihei Ueshiba",
            "c": "65",
            "h": "<blockquote>&ldquo;Failure is the key to success; each mistake teaches us something.&rdquo; &mdash; <footer>Morihei Ueshiba</footer></blockquote>"
        },
        {
            "q": "When you love someone, you love the person as they are, and not as you'd like them to be.",
            "a": "Leo Tolstoy",
            "c": "89",
            "h": "<blockquote>&ldquo;When you love someone, you love the person as they are, and not as you'd like them to be.&rdquo; &mdash; <footer>Leo Tolstoy</footer></blockquote>"
        },
        {
            "q": "Fear of death is fear of surrender to Infinity. Learn to surrender, to exist at Infinity while alive, and fear of death dissolves.",
            "a": "Adi Da Samraj",
            "c": "130",
            "h": "<blockquote>&ldquo;Fear of death is fear of surrender to Infinity. Learn to surrender, to exist at Infinity while alive, and fear of death dissolves.&rdquo; &mdash; <footer>Adi Da Samraj</footer></blockquote>"
        },
        {
            "q": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face.",
            "a": "Eleanor Roosevelt",
            "c": "112",
            "h": "<blockquote>&ldquo;You gain strength, courage and confidence by every experience in which you really stop to look fear in the face.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
        },
        {
            "q": "The more you know, the more you know you don't know.",
            "a": "Aristotle",
            "c": "52",
            "h": "<blockquote>&ldquo;The more you know, the more you know you don't know.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
        },
        {
            "q": "Because of your smile, you make life more beautiful.",
            "a": "Thich Nhat Hanh",
            "c": "52",
            "h": "<blockquote>&ldquo;Because of your smile, you make life more beautiful.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>"
        },
        {
            "q": "Every poem should remind the reader that they are going to die.",
            "a": "Edgar Allan Poe",
            "c": "63",
            "h": "<blockquote>&ldquo;Every poem should remind the reader that they are going to die.&rdquo; &mdash; <footer>Edgar Allan Poe</footer></blockquote>"
        },
        {
            "q": "There is no greater agony than bearing an untold story inside you.",
            "a": "Maya Angelou",
            "c": "66",
            "h": "<blockquote>&ldquo;There is no greater agony than bearing an untold story inside you.&rdquo; &mdash; <footer>Maya Angelou</footer></blockquote>"
        },
        {
            "q": "Every man gotta right to decide his own destiny.",
            "a": "Bob Marley",
            "c": "48",
            "h": "<blockquote>&ldquo;Every man gotta right to decide his own destiny.&rdquo; &mdash; <footer>Bob Marley</footer></blockquote>"
        },
        {
            "q": "Stand up to your obstacles and do something about them. You'll find they haven't half the strength you think they have.",
            "a": "Norman Vincent Peale",
            "c": "119",
            "h": "<blockquote>&ldquo;Stand up to your obstacles and do something about them. You'll find they haven't half the strength you think they have.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
        },
        {
            "q": "I like the dreams of the future better than the history of the past.",
            "a": "Thomas Jefferson",
            "c": "68",
            "h": "<blockquote>&ldquo;I like the dreams of the future better than the history of the past.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>"
        },
        {
            "q": "Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.",
            "a": "Deepak Chopra",
            "c": "129",
            "h": "<blockquote>&ldquo;Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>"
        },
        {
            "q": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
            "a": "Thomas Jefferson",
            "c": "86",
            "h": "<blockquote>&ldquo;Do you want to know who you are? Don't ask. Act! Action will delineate and define you.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>"
        },
        {
            "q": "Old age is like everything else. To make a success of it, you've got to start young.",
            "a": "Theodore Roosevelt",
            "c": "84",
            "h": "<blockquote>&ldquo;Old age is like everything else. To make a success of it, you've got to start young.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>"
        },
        {
            "q": "The best way to find yourself is to lose yourself in the service of others.",
            "a": "Mahatma Gandhi",
            "c": "75",
            "h": "<blockquote>&ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo; &mdash; <footer>Mahatma Gandhi</footer></blockquote>"
        },
        {
            "q": "Courage is almost a contradiction in terms. It means a strong desire to live taking the form of a readiness to die.",
            "a": "Gilbert Chesterton",
            "c": "115",
            "h": "<blockquote>&ldquo;Courage is almost a contradiction in terms. It means a strong desire to live taking the form of a readiness to die.&rdquo; &mdash; <footer>Gilbert Chesterton</footer></blockquote>"
        },
        {
            "q": "You were born to win, but to be a winner, you must plan to win, prepare to win, expect to win.",
            "a": "Arnold Schwarzenegger",
            "c": "94",
            "h": "<blockquote>&ldquo;You were born to win, but to be a winner, you must plan to win, prepare to win, expect to win.&rdquo; &mdash; <footer>Arnold Schwarzenegger</footer></blockquote>"
        },
        {
            "q": "The reward of suffering is experience.",
            "a": "Harry S. Truman",
            "c": "38",
            "h": "<blockquote>&ldquo;The reward of suffering is experience.&rdquo; &mdash; <footer>Harry S. Truman</footer></blockquote>"
        },
        {
            "q": "The worst part of success is trying to find someone who is happy for you.",
            "a": "Bette Midler",
            "c": "73",
            "h": "<blockquote>&ldquo;The worst part of success is trying to find someone who is happy for you.&rdquo; &mdash; <footer>Bette Midler</footer></blockquote>"
        },
        {
            "q": "Happiness is not the absence of problems, it's the ability to deal with them.",
            "a": "Steve Maraboli",
            "c": "77",
            "h": "<blockquote>&ldquo;Happiness is not the absence of problems, it's the ability to deal with them.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>"
        },
        {
            "q": "Imagination is more important than knowledge.",
            "a": "Albert Einstein",
            "c": "45",
            "h": "<blockquote>&ldquo;Imagination is more important than knowledge.&rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>"
        },
        {
            "q": "Every act of creation is first an act of destruction.",
            "a": "Pablo Picasso",
            "c": "53",
            "h": "<blockquote>&ldquo;Every act of creation is first an act of destruction.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>"
        },
        {
            "q": "There exists only the present instant; a Now which always and without end is itself new.",
            "a": "Meister Eckhart",
            "c": "88",
            "h": "<blockquote>&ldquo;There exists only the present instant; a Now which always and without end is itself new.&rdquo; &mdash; <footer>Meister Eckhart</footer></blockquote>"
        },
        {
            "q": "The most important thing in life is to stop saying 'I wish' and start saying 'I will'. Consider nothing impossible, then treat possibilities as probabilities.",
            "a": "Charles Dickens",
            "c": "158",
            "h": "<blockquote>&ldquo;The most important thing in life is to stop saying 'I wish' and start saying 'I will'. Consider nothing impossible, then treat possibilities as probabilities.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
        },
        {
            "q": "The older you get, the more you understand how your conscience works.",
            "a": "Criss Jami",
            "c": "69",
            "h": "<blockquote>&ldquo;The older you get, the more you understand how your conscience works.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
        },
        {
            "q": "If you truly love Nature, you will find beauty everywhere. ",
            "a": "Vincent van Gogh",
            "c": "59",
            "h": "<blockquote>&ldquo;If you truly love Nature, you will find beauty everywhere. &rdquo; &mdash; <footer>Vincent van Gogh</footer></blockquote>"
        },
        {
            "q": "Today is the oldest you've ever been, and the youngest you'll ever be again.",
            "a": "Eleanor Roosevelt",
            "c": "76",
            "h": "<blockquote>&ldquo;Today is the oldest you've ever been, and the youngest you'll ever be again.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
        },
        {
            "q": "Not how long, but how well you have lived is the main thing.",
            "a": "Seneca",
            "c": "60",
            "h": "<blockquote>&ldquo;Not how long, but how well you have lived is the main thing.&rdquo; &mdash; <footer>Seneca</footer></blockquote>"
        },
        {
            "q": "Worry is a waste of emotional reserve.",
            "a": "Ayn Rand",
            "c": "38",
            "h": "<blockquote>&ldquo;Worry is a waste of emotional reserve.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"
        },
        {
            "q": "If you can't imagine it, you can't have it.",
            "a": "Toni Morrison",
            "c": "43",
            "h": "<blockquote>&ldquo;If you can't imagine it, you can't have it.&rdquo; &mdash; <footer>Toni Morrison</footer></blockquote>"
        },
        {
            "q": "Stress happens when the mind resists what is.",
            "a": "Dan Millman",
            "c": "45",
            "h": "<blockquote>&ldquo;Stress happens when the mind resists what is.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>"
        },
        {
            "q": "The highest level of wisdom is when you not only accept but love adversity.",
            "a": "Maxime Lagace",
            "c": "75",
            "h": "<blockquote>&ldquo;The highest level of wisdom is when you not only accept but love adversity.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
        },
        {
            "q": "Life is like playing the violin in public and learning the instrument as one goes on.",
            "a": "Samuel Butler",
            "c": "85",
            "h": "<blockquote>&ldquo;Life is like playing the violin in public and learning the instrument as one goes on.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>"
        },
        {
            "q": "Loss is nothing else but change and change is nature's delight.",
            "a": "Marcus Aurelius",
            "c": "63",
            "h": "<blockquote>&ldquo;Loss is nothing else but change and change is nature's delight.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
        },
        {
            "q": "An inch of time is an inch of gold but you can't buy that inch of time with an inch of gold.",
            "a": "Chinese Proverb",
            "c": "92",
            "h": "<blockquote>&ldquo;An inch of time is an inch of gold but you can't buy that inch of time with an inch of gold.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
        },
        {
            "q": "Nothing ever goes away until it has taught us what we need to know.",
            "a": "Pema Chodron",
            "c": "67",
            "h": "<blockquote>&ldquo;Nothing ever goes away until it has taught us what we need to know.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"
        },
        {
            "q": "When you've got nothing, you've got nothing to lose.",
            "a": "Bob Dylan",
            "c": "52",
            "h": "<blockquote>&ldquo;When you've got nothing, you've got nothing to lose.&rdquo; &mdash; <footer>Bob Dylan</footer></blockquote>"
        },
        {
            "q": "Thinking is a habit, and like any other habit, it can be changed; it just takes effort and repetition.",
            "a": "John Eliot",
            "c": "102",
            "h": "<blockquote>&ldquo;Thinking is a habit, and like any other habit, it can be changed; it just takes effort and repetition.&rdquo; &mdash; <footer>John Eliot</footer></blockquote>"
        }
    ]
    const [quotesState, setQuotesState] = useState(quotes)
    const [currentQuote, setCurrentQuote] = useState<Quote>(
        {
            "q": "Never trust he who trusts everyone.",
            "a": "Carlos Ruiz Zafon",
            "c": "35",
            "h": "<blockquote>&ldquo;Never trust he who trusts everyone.&rdquo; &mdash; <footer>Carlos Ruiz Zafon</footer></blockquote>"
        },
    )

    /*
          User Story #1: I can see a wrapper element with a corresponding id="quote-box".

          User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

          User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

          User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

          User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

          User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

          User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

          User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

          User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

          User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

          User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.
          */
    const getQuote = () => {
        const randomQuoteNumber = Math.floor((Math.random() * quotesState.length))

        const quote = quotesState[randomQuoteNumber]


        setCurrentQuote(quote)
        console.log(currentQuote)

    }




    const handleNewQuote = (): Quote => {
        getQuote()
        console.log(currentQuote)
        return currentQuote

    }
    const tweetData ='https://twitter.com/intent/tweet?text='+ currentQuote.q +' '+currentQuote.a;
    return (
        <div className="App">
            <div id='quote-box'>
                <div id='text'>
                    {currentQuote.q}
                </div>
                <div id="author">
                    {currentQuote.a}
                </div>
                <button id='new-quote' onClick={handleNewQuote}>New Quote</button>
                <a id='tweet-quote' href={tweetData}>Tweet Quote</a>
            </div>
        </div>
    )
}

export default App
