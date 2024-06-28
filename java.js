let button = document.getElementById('button');
let output = document.getElementById('output');

let quotes = [
    '"You will be the best, as long as you put in the work ~Barsilay"',
    '"Trust in the Lord, and he will provide the rest ~Barsilay"',
    '"This year will be filled with triumphs! ~ Naason Joaquin Garcia"',
    '"Success is different for everyone, so do not worry about others! ~Barsilay"',
    '"Just for for it. What can you lose? ~Barsilay"',
    '"Trust in the Lord, and he will provide the rest ~Barsilay"',
    '"It is never over until it is over! ~Barsilay"',
    
]


button.addEventListener('click', function(){
let randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
output.innerHTML = randomQuote;
})